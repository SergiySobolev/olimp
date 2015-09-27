<div ng-app="fuzzyStringSearchModule" class="container">
    <h1>Fuzzy String Search</h1>

    <form role="form" class="form-horizontal" ng-controller="FuzzyStringSearchController">
        <div class="form-group">
            <label for="s1" class="col-sm-2 control-label">First String:</label>
            <div class="col-sm-2">
                <input type="text" ng-model="s1" id="s1" class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <label for="s2" class="col-sm-2 control-label">Second String:</label>
            <div class="col-sm-2">
                <input type="text" ng-model="s2" id="s2" class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <label>Distance beetween {{s1}} and {{s2}} equals: {{findDistance()}}</label>
        </div>
    </form>
</div>