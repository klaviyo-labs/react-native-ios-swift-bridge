//
//  KlaviyoManager.swift
//  klaviyoReactNative
//
//  Created by Mark Urquhart on 09/03/23.
//

import Foundation
import KlaviyoSwift

@objc(KlaviyoManager)
class KlaviyoManager: NSObject {
  static let _sharedInstance = KlaviyoManager()
  
  @objc
  class func sharedInstance() -> KlaviyoManager {
    return KlaviyoManager._sharedInstance
  }
  
  @objc
  func initializeSDK() {
      if let apiKey = ProcessInfo.processInfo.environment["KLAVIYO_PUB_KEY"] {
          KlaviyoSDK().initialize(with: apiKey)
          print(apiKey)
      } else {
          print("Error: KLAVIYO_API_KEY not found in environment variables.")
      }
  }
  
  @objc
  func setup(deviceToken: NSData) {
    KlaviyoSDK().set(pushToken: deviceToken as Data)
  }
  
  @objc
  func setupEmail(_ value: NSString) {
    print("email is set")
    KlaviyoSDK().set(email: value as String)
  }
  
  @objc
  func setupFirstName(_ value: NSString) {
    KlaviyoSDK().set(profileAttribute: .firstName, value: value as String)
  }
  
  @objc
  func setupLastName(_ value: NSString) {
    KlaviyoSDK().set(profileAttribute: .lastName, value: value as String)
  }
  
  @objc
  func setupProfile(_ email: NSString, firstName firstName: NSString, lastName lastName: NSString) {
    print("profile")
    let profile = Profile(email: email as String, firstName: firstName as String, lastName: lastName as String)
    KlaviyoSDK().set(profile: profile)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true // Return 'true' if any functions must run on the main thread, otherwise 'false'.
  }
}
