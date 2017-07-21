'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Items', [
      {
        id: 1,
        title: 'Hitec 2 Axis Joystick GIM-01',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/a/x/axis-joystick-gim-2.jpg',
        price: 18.65,
        description: '["Aurora 9 Gimbal","Create your own control solution","Can enable or disable self centering on both axis","Feature high sensitivity, 8 ball-bearings, and adjustable tension"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 2,
        title: 'DFRobotShop Rover V2 - Arduino Compatible Tracked Robot (Basic Kit)',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/d/f/dfrobotshop-rover-tracked-robot-basic-kit.jpg',
        price: 89.99,
        description: '["Versatile, programmable robot tank kit","Onboard LiPo battery charger","Complete Arduino board built-in (Arduino Uno)","Dual H-bridge and onboard voltage regulator (only one battery needed)","Compatible with a variety of shields","Two XBee areas (2mm 10pin XBee Socket sold separately) and solder prototyping area","No soldering required"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Sphero Spider-Man Interactive App-Enabled Super Hero',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/s/p/sphero-spider-man.jpg',
        price: 149.99,
        description: '["Brings Spidey to life and features hours of entertainment","Every decision you make creates a new path forward","Built with fully animated LCD eyes and motion detection","Wi-Fi capabilities allow for new missions, villains, and other automatic updates"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Moskito Smartphone Controlled Plane',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/m/o/moskito-smartphone-controlled-plane.jpg',
        price: 49.99,
        description: '["Easy, fun, get started","Smartphone controlled plane with joystick","Simple, minimalistic, no distraction","Transform your smartphone into a gamepad"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Walkera Rodeo 150 Racing Quadcopter w/Transmitter White',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/w/a/walkera-rodeo-150-racing-quadcopter-w-transmitter-white-1.png',
        price: 229.0,
        description: '["Meticulous craftsmanship for visual satisfaction","Professionnal HD 5.8G image transmission with zero delay","Enclosed modular design","Lets you adjust flight control parameter as needed"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Hubsan Q4 Nano QuadCopter',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/h/u/hubsan-q4-nano-quadcopter.jpg',
        price: 22.98,
        description: '["Tiny miniature Quadcopter","4 channel beginner friendly","Charge time: 30 minutes","Flight time: 5 minutes"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 7,
        title: 'Seawolf Sport Remote Operated Underwater Vehicule Kit',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/s/e/seawolf-sport-remote-operated-underwater-vehicule-kit.jpg',
        price: 999.0,
        description: '["Fully Assembled RTR Submarine", "Static & Dynamic Diving System", "Auto-detect electronic protect system", "Camera Mount Included"]',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 8,
        title: 'Robomow RS622 Robot Lawn Mower',
        image: 'http://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/r/o/robomow-rs622-robot-lawn-mower-1.jpg',
        price: 2399.0,
        description: '["Maximum lawn size: 2200m2", "Mowing Width: 56cm", "Mowing Height: 20-80mm", "Charged at the base station and stays there between operations", "Handles gardens with several zones and mows each one individually"]',
        createdAt: new Date(), updatedAt: new Date()
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Items', null, {})
  }
};
