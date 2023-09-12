import 'dart:developer';

import 'package:certi_chain/file_exporter.dart';
import 'package:certi_chain/ui/views/home/home_view.dart';
import 'package:certi_chain/ui/views/profile/profile_view.dart';

part 'bottom_nav_view_model.dart';
part 'bottom_nav_view_components.dart';

class BottomNavView extends StatelessWidget {
  final int initialIndex;

  const BottomNavView({Key? key, this.initialIndex = 0}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<BottomNavViewModel>.reactive(
      viewModelBuilder: () => BottomNavViewModel(),
      builder: (context, model, child) {
        return Scaffold(
          body: model._pages[model.currentIndex],
          floatingActionButtonLocation:
              FloatingActionButtonLocation.centerDocked,
          floatingActionButton: Container(
            height: 70.hWise,
            width: 70.wWise,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: Color(0xff588125),
                  spreadRadius: 0.5,
                  blurRadius: 2,
                  offset: const Offset(0, 3), // changes position of shadow
                ),
              ],
            ),
            child: FloatingActionButton(
              hoverElevation: 0,
              focusElevation: 0,
              backgroundColor: const Color(0xFF588125),
              onPressed: () {
                model.handleFab();
                log('FAB pressed');
              },
              elevation: 2.0,
              child: Icon(
                Icons.add,
                color: Colors.white,
                size: 30.hWise,
              ),
            ),
          ),
          bottomNavigationBar: BottomAppBar(
            height: 80.hWise,
            elevation: 0,
            child: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                Expanded(
                  child: IconButton(
                    icon: Icon(
                      FeatherIcons.home,
                      size: 30.hWise,
                      color:
                          model.currentIndex == 0 ? Colors.grey : Colors.black,
                    ),
                    onPressed: () {
                      model.setCurrentIndex(0);
                    },
                  ),
                ),
                const Expanded(
                  child: SizedBox(),
                ),
                Expanded(
                  child: IconButton(
                    icon: Icon(
                      FeatherIcons.user,
                      size: 30.hWise,
                      color:
                          model.currentIndex == 1 ? Colors.grey : Colors.black,
                    ),
                    onPressed: () {
                      model.setCurrentIndex(1);
                    },
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
