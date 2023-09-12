import 'package:certi_chain/file_exporter.dart';
import 'package:certi_chain/ui/views/auth/auth_view.dart';

part 'splash_view_model.dart';
part 'splash_view_component.dart';

class SplashView extends StatelessWidget {
  const SplashView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<SplashViewModel>.nonReactive(
      viewModelBuilder: () => SplashViewModel(),
      builder: (context, model, child) {
        return AnimatedSplashScreen(
          splash: Padding(
            padding: EdgeInsets.only(left: 100.wWise, right: 100.wWise),
            child: Image.asset(
              'assets/img/splash_logo.png',
              height: 50.hWise,
            ),
          ),
          nextScreen: const AuthView(), //just a palceholder
          splashTransition: SplashTransition.sizeTransition,
          backgroundColor: context.colorScheme.splashBackground,
          duration: 1000,
        );
      },
    );
  }
}
