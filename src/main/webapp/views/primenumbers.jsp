<html ng-app="primeNumberModule">
<head>
    <title>Prime Numbers</title>
</head>
<body>
<div ng-controller="primeNumberController">
    <min-max min="demo.min" max="demo.max"></min-max>
    <div class="container">
        There are <b>{{primeNumbersInRange.length}}</b> prime numbers in range.<br>
        <div class="form-group">
            <label for="primenumbers">They Are:</label>
            <textarea class="form-control col-xs-12" rows="5" id="primenumbers">
                {{primeNumbersInRange}}
            </textarea>
        </div>
    </div>
</div>
</body>
</html>
