//
//  InsertManager.h
//  HelloFrameworkWorld
//
//  Created by Bruno Oliveira on 2/17/16.
//  Copyright © 2016 Bruno Oliveira. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface InsertManager : NSObject

+(instancetype) sharedManager;

-(void) startManager;
-(void) stopManager;

-(void) showMessageInViewController:(UIViewController *)viewController;

-(BOOL) isManagerRunning;

@end
