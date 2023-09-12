import 'package:certi_chain/ui/views/auth/auth_view.dart';
import 'package:certi_chain/ui/views/home/home_view.dart';
import 'package:certi_chain/ui/views/splash/splash_view.dart';
import 'package:certi_chain/ui/views/user_details/user_details_view.dart';
import 'package:stacked/stacked_annotations.dart';
import 'package:stacked_services/stacked_services.dart';

@StackedApp(
  routes: [
    MaterialRoute(page: SplashView, initial: true),
    MaterialRoute(page: HomeView),
    MaterialRoute(page: AuthView),
    MaterialRoute(page: UserDetailView),
  ],
  dependencies: [
    LazySingleton(classType: DialogService),
    LazySingleton(classType: NavigationService),
  ],
  logger: StackedLogger(),
)
class $AppRouter {}


// flutter pub run build_runner build --delete-conflicting-outputs