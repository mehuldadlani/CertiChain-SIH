import 'package:certi_chain/file_exporter.dart';

part 'profile_view_model.dart';
part 'profile_view_components.dart';

class ProfileView extends StatelessWidget {
  const ProfileView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<ProfileViewModel>.nonReactive(
      viewModelBuilder: () => ProfileViewModel(),
      builder: (context, model, child) {
        return Scaffold(
          backgroundColor: Colors.white,
        );
      },
    );
  }
}
