angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings)
    {
        $scope.listings = Listings;
        $scope.detailedInfo = undefined;
        //clears the text boxes after adding to directoryApp
        $scope.msgdisp = false;


        $scope.addListing = function ()
        {
            $scope.listings.splice(0, 0, $scope.newListing);
            $scope.resetModel();
            $scope.msgdisp = true;
            $scope.addListingForm.$setPristine();
        };
        $scope.deleteListing = function (listing)
        {
            $scope.detailedInfo = undefined;
            $scope.listings.splice($scope.listings.indexOf(listing), 1);
            $scope.msgdisp = true;
        };
        $scope.showDetails = function (listing)
        {
            $scope.detailedInfo = Listings[$scope.listings.indexOf(listing)];
            $scope.msgdisp = false;
        };
        $scope.resetModel = function ()
        {
            $scope.newListing = {};
            $scope.msgdisp = false;
        };
    }
]);
