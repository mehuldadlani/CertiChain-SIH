part of 'bottom_nav_view.dart';

class BottomNavViewModel extends BaseViewModel {
  final _navigationService = locator<NavigationService>();
  int _currentIndex;
  final List<Widget> _pages = [const HomeView(), const ProfileView()];

  BottomNavViewModel({int initialIndex = 0})
      : _currentIndex = initialIndex; // Added constructor

  int get currentIndex => _currentIndex;
  Widget get currentPage => _pages[_currentIndex];

  void setCurrentIndex(int index) {
    _currentIndex = index;
    notifyListeners();
  }

  Future<void> handleFab() async {
    _navigationService.navigateTo(Routes.issueView);
  }
}
