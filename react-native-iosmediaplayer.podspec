package = JSON.parse(File.read(File.join(__dir__, "package.json")))
version = package['version']

Pod::Spec.new do |s|
  s.name             = "react-native-iosmediaplayer"
  s.version          = version
  s.summary          = package["description"]
  s.requires_arc = true
  s.license      = 'MIT'
  s.homepage     = 'n/a'
  s.authors      = { "kr4xkan" => "" }
  s.source       = { :git => "https://github.com/kadiks/react-native-iosmediaplayer.git", :tag => 'v#{version}'}
  s.source_files = 'RNiTunes/*.{h,m}'
  s.platform     = :ios, "10.3"
  s.dependency 'React-Core'
end
