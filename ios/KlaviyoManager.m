//
//  KlaviyoManager.m
//  klaviyoReactNative
//
//  Created by Mark Urquhart on 09/03/2023
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
//@interface
@interface
RCT_EXTERN_MODULE(KlaviyoManager, NSObject)
//RCT_EXTERN_REMAP_MODULE(RCTKlaviyoManager, KlaviyoManager, NSObject)

//@interface RCT_EXTERN_MODULE(KlaviyoManager, NSObject)
RCT_EXTERN_METHOD(sharedInstance)
RCT_EXTERN_METHOD(testModule)
RCT_EXTERN_METHOD(setupEmail:(NSString)value)
RCT_EXTERN_METHOD(setupFirstName:(NSString)value)
RCT_EXTERN_METHOD(setupLastName:(NSString)value)
RCT_EXTERN_METHOD(setupProfile:(NSString)email firstName:(NSString)firstName lastName:(NSString)lastName)
@end
