<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jawr" uri="http://jawr.net/tags" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="<c:url value="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>" rel="stylesheet">
    <link href="<c:url value="/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/css/angular.rangeSlider.css"/>" rel="stylesheet">
    <link href="<c:url value="/css/animate.less"/>" rel="stylesheet">
    <link href="<c:url value="/css/navbar.less"/>" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular-route.js"></script>
    <jawr:script src="/script/all.js"/>
    <title>Olimp</title>
</head>
<body ng-app="generalModule">
    <div ng-view=""></div>
</body>
</html>