import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img alt={"open"} src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"} style={{width: 36, height: 36}} />
</div>;

const GoogleMapPlugin = ()=> {
    const defaultProps = {
        center: {
          lat: 21.0313,
          lng: 105.8516
        },
        zoom: 15
    };
    return (
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCKbIS2qC0sJJuol4rcPZFnNiJsRfzK7j0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={21.0313}
          lng={105.8516}
          text="My Marker"
        />
      </GoogleMapReact>
    )
}

export default GoogleMapPlugin