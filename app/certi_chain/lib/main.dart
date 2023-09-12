import 'package:certi_chain/file_exporter.dart';

void main() async {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    setupLocator();
    return MaterialApp(
      title: 'CertiChain',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(),
      onGenerateRoute: StackedRouter().onGenerateRoute,
      navigatorKey: StackedService.navigatorKey,
      initialRoute: Routes.splashView,
    );
  }
}