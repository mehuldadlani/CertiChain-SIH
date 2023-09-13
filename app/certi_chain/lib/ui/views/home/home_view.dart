
import 'package:certi_chain/file_exporter.dart';
import 'package:certi_chain/utils/helper_function.dart';

part 'home_view_model.dart';
part 'home_view_components.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<HomeViewModel>.nonReactive(
      viewModelBuilder: () => HomeViewModel(),
      builder: (context, model, child) {
        return Scaffold(
          appBar: AppBar(
            backgroundColor: const Color(0xFFE6EDBF),
            elevation: 0,
            leading: Image.asset(
              'assets/img/splash_logo.png',
              height: 500,
            ),
            leadingWidth: 200,
          ),
          body: Stack(
            children: [
              Container(color: Colors.white),
              Positioned(
                top: -400,
                left: -120,
                right: -10,
                child: Container(
                  width: 800,
                  height: 800, // Adjust for the circle's size
                  decoration: const BoxDecoration(
                    color: Color(0xFFE6EDBF),
                    shape: BoxShape.circle,
                  ),
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(15.0),
                    child: CircleAvatar(
                      radius: 70,
                      foregroundImage: Image.asset(
                        'assets/img/image.png',
                        height: 200.hWise,
                      ).image,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(10),
                    child: Text(
                      'Welcome, ${HelperFunction.name!}',
                      style: GoogleFonts.inder(
                        fontSize: 20.hWise,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }
}
