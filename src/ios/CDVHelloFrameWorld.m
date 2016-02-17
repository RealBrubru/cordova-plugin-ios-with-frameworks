
#import "CDVHelloFrameWorld.h"
#import <Cordova/CDV.h>
#import "HelloFrameworkWorld/InsertManager.h"

@implementation CDVHelloFrameWorld

- (void) resize:(CDVInvokedUrlCommand*)command
{
    NSLog(@"CDVHelloFrameWorld AAAAHAHAHAHAHAHAHAAAAHHH");

    [[InsertManager sharedManager] startManager];
}

@end