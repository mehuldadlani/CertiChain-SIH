part of 'auth_view.dart';

class AuthViewModel extends BaseViewModel {
  final _navigationService = locator<NavigationService>();

  void init() async {
    AuthLogic.setChain();
    AuthLogic.init(Env.dev);
  }

  Future<void> handleLogin() async {
    await AuthLogic.login();

    bool isLoggedIn = await AuthLogic.isLoginAsync();
    if (isLoggedIn) {
      _navigationService.navigateTo(Routes.userDetailView);
    } else {
      print('Login Unsuccessful');
    }
  }
}
