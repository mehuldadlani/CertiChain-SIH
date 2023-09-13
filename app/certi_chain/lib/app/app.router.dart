// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// StackedNavigatorGenerator
// **************************************************************************

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:certi_chain/file_exporter.dart' as _i11;
import 'package:certi_chain/ui/views/auth/auth_view.dart' as _i4;
import 'package:certi_chain/ui/views/bottom_nav/bottom_nav_view.dart' as _i6;
import 'package:certi_chain/ui/views/home/home_view.dart' as _i3;
import 'package:certi_chain/ui/views/issue/issue_view.dart' as _i8;
import 'package:certi_chain/ui/views/issue_form/issue_form_view.dart' as _i9;
import 'package:certi_chain/ui/views/profile/profile_view.dart' as _i7;
import 'package:certi_chain/ui/views/splash/splash_view.dart' as _i2;
import 'package:certi_chain/ui/views/user_details/user_details_view.dart'
    as _i5;
import 'package:flutter/material.dart' as _i10;
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart' as _i1;
import 'package:stacked_services/stacked_services.dart' as _i12;

class Routes {
  static const splashView = '/';

  static const homeView = '/home-view';

  static const authView = '/auth-view';

  static const userDetailView = '/user-detail-view';

  static const bottomNavView = '/bottom-nav-view';

  static const profileView = '/profile-view';

  static const issueView = '/issue-view';

  static const issueFormView = '/issue-form-view';

  static const all = <String>{
    splashView,
    homeView,
    authView,
    userDetailView,
    bottomNavView,
    profileView,
    issueView,
    issueFormView,
  };
}

class StackedRouter extends _i1.RouterBase {
  final _routes = <_i1.RouteDef>[
    _i1.RouteDef(
      Routes.splashView,
      page: _i2.SplashView,
    ),
    _i1.RouteDef(
      Routes.homeView,
      page: _i3.HomeView,
    ),
    _i1.RouteDef(
      Routes.authView,
      page: _i4.AuthView,
    ),
    _i1.RouteDef(
      Routes.userDetailView,
      page: _i5.UserDetailView,
    ),
    _i1.RouteDef(
      Routes.bottomNavView,
      page: _i6.BottomNavView,
    ),
    _i1.RouteDef(
      Routes.profileView,
      page: _i7.ProfileView,
    ),
    _i1.RouteDef(
      Routes.issueView,
      page: _i8.IssueView,
    ),
    _i1.RouteDef(
      Routes.issueFormView,
      page: _i9.IssueFormView,
    ),
  ];

  final _pagesMap = <Type, _i1.StackedRouteFactory>{
    _i2.SplashView: (data) {
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) => const _i2.SplashView(),
        settings: data,
      );
    },
    _i3.HomeView: (data) {
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) => const _i3.HomeView(),
        settings: data,
      );
    },
    _i4.AuthView: (data) {
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) => const _i4.AuthView(),
        settings: data,
      );
    },
    _i5.UserDetailView: (data) {
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) => const _i5.UserDetailView(),
        settings: data,
      );
    },
    _i6.BottomNavView: (data) {
      final args = data.getArgs<BottomNavViewArguments>(
        orElse: () => const BottomNavViewArguments(),
      );
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) =>
            _i6.BottomNavView(key: args.key, initialIndex: args.initialIndex),
        settings: data,
      );
    },
    _i7.ProfileView: (data) {
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) => const _i7.ProfileView(),
        settings: data,
      );
    },
    _i8.IssueView: (data) {
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) => const _i8.IssueView(),
        settings: data,
      );
    },
    _i9.IssueFormView: (data) {
      final args = data.getArgs<IssueFormViewArguments>(nullOk: false);
      return _i10.MaterialPageRoute<dynamic>(
        builder: (context) =>
            _i9.IssueFormView(key: args.key, orgName: args.orgName),
        settings: data,
      );
    },
  };

  @override
  List<_i1.RouteDef> get routes => _routes;
  @override
  Map<Type, _i1.StackedRouteFactory> get pagesMap => _pagesMap;
}

class BottomNavViewArguments {
  const BottomNavViewArguments({
    this.key,
    this.initialIndex = 0,
  });

  final _i11.Key? key;

  final int initialIndex;

  @override
  String toString() {
    return '{"key": "$key", "initialIndex": "$initialIndex"}';
  }

  @override
  bool operator ==(covariant BottomNavViewArguments other) {
    if (identical(this, other)) return true;
    return other.key == key && other.initialIndex == initialIndex;
  }

  @override
  int get hashCode {
    return key.hashCode ^ initialIndex.hashCode;
  }
}

class IssueFormViewArguments {
  const IssueFormViewArguments({
    this.key,
    required this.orgName,
  });

  final _i11.Key? key;

  final String orgName;

  @override
  String toString() {
    return '{"key": "$key", "orgName": "$orgName"}';
  }

  @override
  bool operator ==(covariant IssueFormViewArguments other) {
    if (identical(this, other)) return true;
    return other.key == key && other.orgName == orgName;
  }

  @override
  int get hashCode {
    return key.hashCode ^ orgName.hashCode;
  }
}

extension NavigatorStateExtension on _i12.NavigationService {
  Future<dynamic> navigateToSplashView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return navigateTo<dynamic>(Routes.splashView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToHomeView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return navigateTo<dynamic>(Routes.homeView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToAuthView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return navigateTo<dynamic>(Routes.authView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToUserDetailView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return navigateTo<dynamic>(Routes.userDetailView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToBottomNavView({
    _i11.Key? key,
    int initialIndex = 0,
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  }) async {
    return navigateTo<dynamic>(Routes.bottomNavView,
        arguments: BottomNavViewArguments(key: key, initialIndex: initialIndex),
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToProfileView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return navigateTo<dynamic>(Routes.profileView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToIssueView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return navigateTo<dynamic>(Routes.issueView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> navigateToIssueFormView({
    _i11.Key? key,
    required String orgName,
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  }) async {
    return navigateTo<dynamic>(Routes.issueFormView,
        arguments: IssueFormViewArguments(key: key, orgName: orgName),
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithSplashView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return replaceWith<dynamic>(Routes.splashView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithHomeView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return replaceWith<dynamic>(Routes.homeView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithAuthView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return replaceWith<dynamic>(Routes.authView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithUserDetailView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return replaceWith<dynamic>(Routes.userDetailView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithBottomNavView({
    _i11.Key? key,
    int initialIndex = 0,
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  }) async {
    return replaceWith<dynamic>(Routes.bottomNavView,
        arguments: BottomNavViewArguments(key: key, initialIndex: initialIndex),
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithProfileView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return replaceWith<dynamic>(Routes.profileView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithIssueView([
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  ]) async {
    return replaceWith<dynamic>(Routes.issueView,
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }

  Future<dynamic> replaceWithIssueFormView({
    _i11.Key? key,
    required String orgName,
    int? routerId,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
    Widget Function(BuildContext, Animation<double>, Animation<double>, Widget)?
        transition,
  }) async {
    return replaceWith<dynamic>(Routes.issueFormView,
        arguments: IssueFormViewArguments(key: key, orgName: orgName),
        id: routerId,
        preventDuplicates: preventDuplicates,
        parameters: parameters,
        transition: transition);
  }
}
