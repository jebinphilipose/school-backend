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
    this.search = ko.observable("");
    this.ndir = ko.observable(-1);
    this.pdir = ko.observable(-1);
    this.mdir = ko.observable(-1);
    this.schoolList = ko.observableArray();
    this.searchedSchools = ko.computed(function () {
        var search = self.search().toLowerCase();
        if (!search) {
            return self.schoolList();
        } else {
            return ko.utils.arrayFilter(self.schoolList(), function (school) {
                return school.schoolname().toLowerCase().indexOf(search) >= 0 || school.address().toLowerCase().indexOf(search) >= 0 || school.area().toLowerCase().indexOf(search) >= 0 || school.pincode().toLowerCase().indexOf(search) >= 0 || school.landmark().toLowerCase().indexOf(search) >= 0;
            });
        }
    }, this);

    this.sortByName = function () {
        self.ndir(self.ndir() * -1);
        self.pdir(-1);
        self.mdir(-1);
        self.schoolList.sort(function (a, b) {
            return self.ndir() * (a.schoolname() < b.schoolname() ? -1 : (a.schoolname() > b.schoolname() ? 1 : 0));
        });
    };

    this.sortByPin = function () {
        self.pdir(self.pdir() * -1);
        self.ndir(-1);
        self.mdir(-1);
        self.schoolList.sort(function (a, b) {
            return self.pdir() * (a.pincode() < b.pincode() ? -1 : (a.pincode() > b.pincode() ? 1 : 0));
        });
    };

    this.sortByMedium = function () {
        self.mdir(self.mdir() * -1);
        self.ndir(-1);
        self.pdir(-1);
        self.schoolList.sort(function (a, b) {
            return self.mdir() * (a.medium_of_inst() < b.medium_of_inst() ? -1 : (a.medium_of_inst() > b.medium_of_inst() ? 1 : 0));
        });
    };

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