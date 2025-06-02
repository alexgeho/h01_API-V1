"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToDriverListOutput = void 0;
const resource_type_1 = require("../../../core/types/resource-type");
const mapToDriverListOutput = (drivers) => {
    return {
        meta: {},
        data: drivers.map((driver) => ({
            type: resource_type_1.ResourceType.Drivers,
            id: driver.id.toString(),
            attributes: {
                name: driver.name,
                phoneNumber: driver.phoneNumber,
                email: driver.email,
                vehicleMake: driver.vehicleMake,
                vehicleModel: driver.vehicleModel,
                vehicleYear: driver.vehicleYear,
                vehicleLicensePlate: driver.vehicleLicensePlate,
                vehicleDescription: driver.vehicleDescription
                    ? driver.vehicleDescription
                    : null,
                vehicleFeatures: driver.vehicleFeatures,
            },
        })),
    };
};
exports.mapToDriverListOutput = mapToDriverListOutput;
