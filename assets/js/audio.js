function playSound(file, volume){
    // create WebAudio API context
    var context = new AudioContext()

    // Create lineOut
    var lineOut = new WebAudiox.LineOut(context)

    lineOut.volume = volume;

    // load a sound and play it immediatly
    WebAudiox.loadBuffer(context, '/assets/'+ file, function(buffer){
        // init AudioBufferSourceNode
        var source  = context.createBufferSource();
        source.buffer   = buffer
        source.connect(lineOut.destination)

        // start the sound now
        source.start(0);
    });
}
