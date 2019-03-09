// Model
var School = function (data) {
    if (data != null) {
        this.district = ko.observable(data.district);
        this.block = ko.observable(data.block);
        this.cluster = ko.observable(data.cluster);
        this.schoolid = ko.observable(data.schoolid);
        this.schoolname = ko.observable(data.schoolname);
        this.category = ko.observable(data.category);
        this.gender = ko.observable(data.gender);
        this.medium_of_inst = ko.observable(data.medium_of_inst);
        this.address = ko.observable(data.address);
        this.area = ko.observable(data.area);
        this.pincode = ko.observable(data.pincode);
        this.landmark = ko.observable(data.landmark);
        this.identification1 = ko.observable(data.identification1);
        this.busroutes = ko.observable(data.busroutes);
        this.identification2 = ko.observable(data.identification2);
        this.latlong = ko.observable(data.latlong);
    }
}

// ViewModel
var ViewModel = function () {
    var self = this;
    this.schoolList = ko.observableArray();

    $.ajax({
        url: '/api/v1/schools/',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var mappedSchools = $.map(response, function (item) {
                return new School(item)
            });
            self.schoolList(mappedSchools);
        },
        error: function () {
            console.log('Request failed!');
        }
    });
}

ko.applyBindings(new ViewModel());