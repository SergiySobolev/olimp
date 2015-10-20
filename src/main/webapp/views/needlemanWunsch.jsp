<div ng-app="fuzzyStringSearchModule" class="container">
    <h1>Needleman - Wunsch algorithm</h1>
    <form role="form" class="form-horizontal" ng-controller="FuzzyStringSearchController">
        <div class="form-group">
            <label for="s" class="col-sm-2 control-label">Input String:</label>
            <div class="col-sm-2">
                <input type="text" ng-model="s" id="s" class="form-control" ng-change="getDictionary()"/>
            </div>
        </div>
    </form>
</div>
