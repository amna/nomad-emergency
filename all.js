
 <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgeVvkpPQh9fQC_pia-w5hlgEllZRGdPg">
    </script>
      <script type="text/javascript">
      function initialize() {
        var mapOptions = {
          center: { lat: 13.7563, lng: 100.5018},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>

      <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42073216-5', 'auto');
  ga('send', 'pageview');
</script>
