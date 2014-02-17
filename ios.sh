echo "Killing xcode..."
kill $(ps aux | grep 'Xcode' | awk '{print $2}')
rm -r platforms/ios
rm plugins/ios.json
phonegap build ios
open platforms/ios/*.xcodeproj
