<div ng-app="fuzzyStringSearchModule" class="container">
    <h1>Fuzzy String Search</h1>

    <form role="form" class="form-horizontal">
        <div class="form-group col-xs-4"
             ng-controller="FuzzyStringSearchController"
                >
            <label for="input">Input string</label>
            <input type="text" ng-model="inputString" id="input" class="form-control input-lg"/>
        </div>
    </form>

</div>