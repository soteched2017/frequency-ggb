var pianoScale = 2.5;

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    outerRadius = (height / 2 - 30),
    innerRadius = outerRadius - 120*pianoScale,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var over = "ontouchstart" in window ? "touchstart" : "mouseover",
    out = "ontouchstart" in window ? "touchend" : "mouseout";

var pie = d3.pie()
    .startAngle(-4*Math.PI/5)
    .endAngle(4*Math.PI/5)
    .value(function() { return 1; })
    .sort(null);

var arc = d3.arc()
    .cornerRadius(4)
    .padRadius(outerRadius)
    .innerRadius(function(d) { return d.sharp ? innerRadius + (outerRadius - innerRadius) * 0.3 : innerRadius; });

var key = g.selectAll("path")
  .data(sharpen(pie(repeat(["C", "D", "E", "F", "G", "A", "B"],6/pianoScale * 4/pianoScale))))
  .enter().append("path")
    .each(function(d, i) { d.outerRadius = outerRadius - 10; })
    .attr("class", function(d) { return "key key--" + (d.sharp ? "black" : "white"); })
    .attr("d", arc)
    .on(over, arcTween(outerRadius, 0))
    .on(out, arcTween(outerRadius - 10, 150));

function arcTween(outerRadius, delay) {
  return function() {
    d3.event.preventDefault();
    d3.select(this).transition().delay(delay).attrTween("d", function(d) {
      var i = d3.interpolate(d.outerRadius, outerRadius);
      return function(t) { d.outerRadius = i(t); return arc(d); };
    });
  };
}

function repeat(notes, n) {
  return d3.merge(d3.range(n).map(function() { return notes; }));
}

function sharpen(keys) {
  var keyWidth = Math.PI * 2 / keys.length;

  for (var i = 0, n = keys.length - 1, k; i < n; ++i) {
    if (/[CDFGA]/.test((k = keys[i]).data)) {
      keys.splice(++i, 0, {
        startAngle: k.startAngle + keyWidth * 0.65,
        endAngle: k.endAngle + keyWidth * 0.35,
        sharp: true
      });
      ++n;
    }
  }

  for (var i = 0, n = keys.length; i < n; ++i) {
    keys[i].sharp = !!keys[i].sharp;
    keys[i].frequency = 880 * Math.pow(2, (i % 72 - 9) / 12 - 2); // 0 is middle C
  }

  return keys.sort(function(a, b) { return a.sharp - b.sharp; });
}

(function() {
  var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext;
  if (!AudioContext) return console.error("AudioContext not supported");
  if (!OscillatorNode.prototype.start) OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn;
  if (!OscillatorNode.prototype.stop) OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff;

  var context = new AudioContext;

  key.on(over + ".beep", function(d, i) {
    var now = context.currentTime,
        oscillator = context.createOscillator(),
        gain = context.createGain();
    oscillator.type = wave;
    var freq = d.frequency;
    oscillator.frequency.value = d.frequency;
    gain.gain.linearRampToValueAtTime(0.0, now + 0.0);
    gain.gain.linearRampToValueAtTime(0.6, now + 0.1);
    gain.gain.linearRampToValueAtTime(0.0, now + 1.0);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(0);
    
    document.ggbApplet.setValue("frequency",freq.toFixed(2));
    
    notes.push(+freq.toFixed(2));
    names.push(freq2note(freq.toFixed(2)));
    
    document.getElementById("toneBox").value = names;
    
    var list = document.getElementById("toneBox").value;
    var list1 = list.replace(/,/g," ");
    document.getElementById("toneBox").value = list1;
    
    setTimeout(function() { oscillator.stop(); }, 1500);
    
    vfRender();

    send(Math.round(oscillator.frequency.value*100));
  });
})();