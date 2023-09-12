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
          appBar: AppBar(
            backgroundColor: Color(0xFFE6EDBF),
            elevation: 0,
            leading: Image.asset('assets/img/splash_logo.png', height: 500,),
            leadingWidth: 200,
          ),
          body: Container(
            height: 400.hWise,
          width: 400.wWise,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.only(bottomRight:Radius.circular(50), bottomLeft:Radius.circular(50)),
              color: Color(0xFFE6EDBF),
            ),
            child: Text("Home Screen"),
          ),
        );
      },
    );
  }
}
