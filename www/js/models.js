function Marker(id, top, left, defaultImageUrl, activeImageUrl) {

    var id = id;
    var top = top;
    var left = left;
    var defaultImageUrl = defaultImageUrl;
    var activeImageUrl = activeImageUrl;
    var isActive = false;

    this.setIsActive = function(value) {
        isActive = value;
    }

    this.getImage = function() {
        return isActive ? activeImageUrl : defaultImageUrl;
    }

    this.getId = function() {
        return id;
    }

    this.getOffset = function() {
        return {
            top: top,
            left: left
        }
    }

}

function PointOfInterest() {
    var longitude;
    var latitude;
}