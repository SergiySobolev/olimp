<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jawr" uri="http://jawr.net/tags" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="<c:url value="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>" rel="stylesheet">
    <link href="<c:url value="/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/css/angular.rangeSlider.css"/>" rel="stylesheet">
    <link href="<c:url value="/css/select.css"/>" rel="stylesheet">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.8.5/css/selectize.default.css">
    <link href="<c:url value="/css/animate.less"/>" rel="stylesheet/less">
    <link href="<c:url value="/css/common.less"/>" rel="stylesheet/less">
    <link href="<c:url value="/css/navbar.less"/>" rel="stylesheet/less">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular-route.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-strap/2.3.4/angular-strap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-strap/2.3.4/angular-strap.tpl.js"></script>
    <jawr:script src="/script/all.js"/>
    <title>Olimp</title>
</head>
<body ng-app="generalModule">
<div>
    <div class="displayInlineBlock">
        <navigation-menu></navigation-menu>
    </div>
    <div class="dashboard">
        <div class="fadeInUpBig animated" ui-view></div>
    </div>
</div>
</body>
</html>