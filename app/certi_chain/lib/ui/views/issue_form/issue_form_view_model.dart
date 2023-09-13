part of 'issue_form_view.dart';

class IssueFormViewModel extends BaseViewModel {
  final _navigationService = locator<NavigationService>();
  TextEditingController certNameController = TextEditingController();
  TextEditingController dobController = TextEditingController();
  TextEditingController aadharController = TextEditingController();
  TextEditingController emailController = TextEditingController();

  void handleSubmitButton(BuildContext context) {
    log('Handle Submit Button');
  }
}
