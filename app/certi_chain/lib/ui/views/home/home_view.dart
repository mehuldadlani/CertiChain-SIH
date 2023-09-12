import 'package:certi_chain/file_exporter.dart';

part 'home_view_model.dart';
part 'home_view_components.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<HomeViewModel>.nonReactive(
      viewModelBuilder: () => HomeViewModel(),
      // onViewModelReady: (model) => model.navigateAfterDelay(),
      builder: (context, model, child) {
        return Scaffold(
          body: Center(
            child: Text("Home Screen"),
          ),
        );
      },
    );
  }
}
