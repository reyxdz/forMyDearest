<audio id="myAudio" controls>
    <source src="audio-file.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>

<script>
    const audio = document.getElementById("myAudio");

    audio.addEventListener("loadedmetadata", function() {
        audio.currentTime = 6; // Start at 6 seconds
    });
</script>
