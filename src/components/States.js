import React from 'react';
import { useGlobalContext } from "../context";

const States = () => {

   const { openStateModal } = useGlobalContext();

    
  return (
    //   svg from https://mapsvg.com/maps/australia
    <svg className="svg">
      <path
        d="m 195.54219,27.830405 0,-0.36 0.62,-0.79 -1.5,-1.01 0.34,-0.79 0.42,-0.21 1.53,0.05 0.1,-0.35 -0.11,-0.95 -0.3,-0.59 0.28,-0.41 0.97,0.05 1.08,0.7 1.42,0.07 1,0.72 0.61,0.09 4.76,-0.32 1.42,0.45 1.75,-1.2 1.49,0.03 0.61,1.16 -0.37,0.8 0.59,-0.6 0.08,-0.26 -0.22,-1.29 0.21,-0.39 1.45,-0.52 1.14,0.42 0.72,-0.06 -0.42,-0.05 -0.77,-0.57 -0.12,-0.51 0.08,-3.17 0.61,-0.96 -1.64,-1.22 -0.55,-0.78 -0.45,-0.28 -0.82,-0.15 -1.55,0.26 -1.34,0.72 -0.21,-0.02 -1.05,-1.05 -0.21,-0.72 -1.14,-0.61 -1.02,0.09 -0.07,-0.12 1.19,-1.42 1.2,-0.55 1.15,1.13 0.82,1.94 0.42,0.04 0.33,-0.6 -0.47,-1.46 -0.5,-0.9 0.38,-0.09 1.03,0.35 0.7,-0.37 1.77,1.48 0.11,0.48 1.72,2.2 0.59,0.13 0.5,-0.39 1.11,-1.66 0.47,0.04 0.85,0.91 1.63,2.95 0.4,0.32 0.74,0.22 0.61,-0.41 0.54,0 0.55,0.8 1.54,0.65 0.74,0.02 0.53,-0.17 1.05,-0.57 0.4,-0.54 1.18,0.2 0.12,0.34 -0.75,0.43 -0.17,0.26 0.05,0.27 0.34,0.32 0.78,0.33 0.6,-0.28 0.32,-0.42 0.25,-0.04 1.47,1.12 -0.13,0.21 0.15,0.89 0.21,0.17 1.77,-0.26 0.56,0.23 1.03,0.09 0.9,-0.11 0.8,-0.61 1.07,-0.06 1.08,1.5 1.37,0.71 0.94,0.78 1.18,0.11 0.42,0.19 -0.06,-0.21 0.44,-1.14 0.67,-0.67 0.56,-0.24 0.63,0.28 1.61,-0.19 0.83,-0.67 -0.25,-0.14 -0.62,0.37 -0.11,-0.27 0.23,-0.83 1,-0.27 0.74,0.02 1.38,-1.1 -0.04,-0.77 0.4,0.01 0.37,0.43 -0.33,0.53 -1.85,1.57 0.46,0.54 -1.25,1.28 -0.05,0.35 0.21,0.52 0.51,0.48 0.55,-0.24 0.16,-0.45 0.89,-0.73 1.51,-0.44 -0.92,1.16 0.37,0.56 0.8,-0.37 0.19,0.33 -0.87,1.26 0.3,0.74 0.32,0.3 0.45,-0.29 0.82,-0.09 0.15,0.26 0.75,-0.07 0.58,-0.45 0.76,-1.93 -0.29,-0.38 -1.03,0.13 -0.66,-0.28 -0.05,-0.27 1.13,-1.12 1.84,-1.23 1.21,-0.22 -0.25,0.83 0.68,1.91 0.77,1.12 0.49,-0.01 0.42,-0.3 -0.03,-0.24 -0.71,-0.26 0.06,-0.21 0.88,-0.22 1.1,0.56 1.11,1.5 -1.89,1.32 -0.64,0.74 -1.1,1.77 -0.25,1.34 -1.37,-0.51 -0.11,0.74 0.67,1.24 -0.01,1.07 -0.18,1.05 -0.76,1.14 -0.1,-0.35 -0.88,0.3 0.04,-1.97 -0.17,-0.17 -0.34,0.08 -0.43,1.16 -0.93,0.81 -0.44,0.03 -0.15,-0.43 -0.53,-0.21 -1.13,0.44 -0.72,0.59 -0.39,0.67 0.03,0.31 0.44,0.34 -0.29,0.65 -0.48,0.4 -0.2,1.25 0.47,1.39 0.42,0.23 0.6,-0.15 0.47,-0.53 -0.06,0.83 -0.34,1.16 -0.69,1.06 -0.3,2.01 -0.3,0.58 -1.26,0.85 -1.43,1.85 -0.88,1.52 -0.02,0.81 -1.36,0.92 -0.44,-0.01 0.67,1.94 0.46,0.69 0.72,0.61 1.39,0.5 1.97,1.26 1.01,0.92 2.91,1.51 0.31,0.27 0.26,1.37 0.6,0.7 2.7,1.29 1.11,0.92 1.01,1.1 2.87,0.12 1.15,0.6 2.52,1.79 1.29,0.55 0.6,-0.02 1.12,0.37 0.99,0.49 1.32,2.1 1.54,1.31 0,0 0,109.549995 0,0 -73.46,0.01 0,0 -14.47,-0.01 0,0 -9.71,0.07 0,0 -0.06,-101.599995 0,0 0,-20.99 0,0 0,-5.9 0,0 0.97,0.32 1.04,0.9 -0.12,2.04 0.18,0.22 0.71,-0.88 -0.41,-2.71 0.12,-0.25 1.12,0.31 1.4,0.71 2.24,2.5 0.09,0.54 0.6,-0.23 -0.74,-0.97 -0.4,-0.83 -0.14,-0.83 0.24,-0.47 0.12,-0.75 1.67,0.29 0.69,-0.23 0.87,-0.84 -1.94,0.61 -0.98,-0.63 -0.78,-1.02 -0.18,-0.52 0.4,-0.2 0.86,-0.09 0.71,-0.5 0.04,-0.24 -1.22,0.41 -1.3,-0.24 -0.92,-0.53 -1.05,-1 0.13,-0.89 0.65,-1.24 0.67,-0.89 2.61,-1.64 0.59,-2.78 -0.06,-0.51 0.51,-2.01 0.77,-0.8 0.1,0.7 0.38,0.22 1.05,-0.19 1.33,-0.9 1.09,-1.15 -0.11,-0.41 -0.68,-0.93 -0.37,-0.31 -0.37,-0.08 -0.09,-0.24 0.1,-1.96 0.18,-0.49 0.45,-0.2 0.15,0.28 0.32,0.15 0.41,-0.09 0.7,-0.5 0.28,-0.61 -0.1,-1.47 0.11,-0.37 1.68,-0.75 1,1.14 0.96,-0.07 -0.92,-0.27 -0.31,-1.17 0.29,-0.71 0.08,-0.88 -0.33,-0.25 0.53,-0.22 1.54,0.49 1.38,2.33 z m 0.68,-7.74 -1.06,-0.88 -1.99,-0.82 -2,-1.57 -0.81,-2.13 -0.58,-2.15 0.08,-0.81 0.23,-0.18 1.51,1.32 0.45,0.73 1.43,0.45 1.52,-0.36 0.59,-0.55 1.14,0.49 1.27,-0.98 0.33,-0.03 0.22,0.75 0.56,0.8 0.05,-0.28 -0.37,-0.93 0.13,-0.55 0.72,-0.57 1.59,0.64 1.2,1.58 0.09,0.83 -2.77,2.91 -0.35,0.05 -1.34,0.86 -1.84,1.38 z m 64.59,24.81 0.17,-0.28 0.47,-0.03 -0.28,1.4 -0.57,0.22 -1.5,-0.4 -1.29,0.19 -2.76,-0.69 0.38,-1.91 -0.08,-0.82 0.25,-0.93 0.31,-0.53 1.47,-0.28 0.35,-0.27 -0.31,-0.7 0.91,-0.76 0.47,0.03 -0.08,0.51 -0.42,0.29 0.4,1.16 1.03,0.18 0.36,-0.38 -0.11,-0.38 0.2,-0.27 0.36,-0.1 0.32,0.23 0.08,0.41 -1.07,1.1 -0.57,0.37 -0.67,1.49 0.02,1.03 0.31,0.27 1.45,0.22 0.4,-0.37 z m -69.65,-25.92 -1.8,-0.69 -2.51,0.64 -0.6,-0.12 -0.17,-0.27 -0.08,-0.29 0.6,-1.09 0.5,0.3 0.41,0.02 0.4,-0.39 -0.03,-1.53 -0.18,-0.47 0.89,-1.55 0.96,-0.2 1.6,4 0.77,0.2 0.81,0.73 -0.25,0.55 -1.32,0.16 z m 65.25,-4.21 0.04,-0.51 1.47,-2.13 0.93,-1.88 0.49,-0.2600002 -0.53,2.0400002 -1.77,2.48 -0.24,0.22 -0.39,0.04 z m -42.42,-1.23 -0.32,-0.34 -0.38,-1.05 -0.32,-1.83 0.83,-0.32 0.52,1.71 -0.02,1.08 -0.31,0.75 z m 48.4,49.79 -0.62,-0.46 -0.68,-1.01 0.2,-0.58 0.62,-0.61 0.49,0.61 0.41,1.33 -0.28,0.71 -0.14,0.01 z m -9.26,-21.98 0.03,-0.4 -0.35,-0.61 -0.28,0.19 0.17,0.53 -0.46,0 -0.17,-0.21 0.1,-0.93 0.95,-0.75 0.46,0.08 0.48,0.65 -0.15,0.71 -0.36,0.58 -0.42,0.16 z m -0.2,-24 0,-0.51 0.99,-0.79 0.82,-0.04 1.44,-1.12 -0.1,0.55 -1.09,0.83 -2.06,1.08 z m 3.71,43.92 -0.28,-0.14 0.22,-0.94 0.62,-0.42 0.31,0.14 -0.19,1.23 -0.68,0.13 z"
        title="Northern Territory"
        id="AU-NT"
        onClick={() => openStateModal("NT")}
        fill="green"
      />
      <path
        d="m 14.722186,181.0504 0.19,-0.37 0.01,-1.47 -2.43,-2.57 -1.29,-2.42 -1.18,-2.99 -1.1500005,-0.7 -0.98,-2.78 -0.09,-0.53 0.12,-1.08 -0.67,-1.11 -1.37,-1.6 -0.39,-1.14 -0.06,-2.35 0.44,-1.14 0.24,-1.46 0.93,-3 0.75,-1.5 1.54,-1.21 0.27,-1.01 0.15,-1.35 -0.24,-1.56 0.6300005,-1.92 -0.12,-1.14 -0.5900005,-1.63 -0.89,-1.26 -0.16,-0.95 1.56,-3.16 1.4500005,-4.17 1.05,-1.56 0.64,-0.36 0.8,-0.14 0.14,0.28 -0.54,1.02 -0.53,3.07 0.7,1.48 -0.34,2.16 0.47,0.48 2.37,-1 0.3,-1.25 0.66,-1.69 1.79,-3.11 0.28,-0.96 3.17,-1.76 1.19,-0.09 2.09,-1.04 2.24,-0.86 1.82,-2.15 0.66,-0.51 1.37,-0.59 1.29,-1.94 2.55,-1.19 0.28,-0.74 0.69,-0.38 0.66,-0.08 1.8,-0.64 1.42,-0.88 1.1,-0.93 0.88,0.19 0.47,0.47 0.48,0.13 2.07,-1.11 1.07,0.37 0.35,0.4 0.76,0.34 0.81,0.15 0.69,-0.01 3.03,-0.62 1.79,-0.78 2.38,-2.29 1.19,-0.71 0.15,0.29 0.46,0.01 3.37,-0.56 1.22,0.07 1.56,-0.52 1.62,-1.94 0.32,-0.87 1.09,-0.83 1.18,-0.11 2.66,0.66 1.6,0.62 2.21,-1.14 4.93,-0.72 1.06,-0.35 5.88,-2.45 1.62,-0.84 2.71,-2.26 2.3,-3.11 1.64,-3.529995 1.5,-2.02 -0.13,-0.92 0.39,-0.86 0.26,-0.25 0.71,0.17 0.54,-0.29 0.8,-0.64 0.58,-0.85 0.670004,-0.33 2.27,-1.79 0.33,-0.8 -0.06,-0.62 -0.32,-0.3 -0.86,-0.24 -0.49,-0.73 -0.12,-2.14 -0.64,-1.66 0.03,-2.21 0.34,-1.35 0.89,-1.53 1.33,-1.26 0.74,-0.47 1.38,-0.01 -0.55,-1.23 0.46,-0.62 0.3,-0.12 0.24,0.23 0.26,0 1.22,-0.42 0.11,-0.32 -0.28,-0.41 0.26,-1.09 0.31,-0.35 0.57,-0.12 0.57,-0.63 0.06,-0.62 0.23,-0.37 0.77,-0.28 0.74,0.74 -0.23,0.29 -0.54,-0.06 -0.36,1.25 0.69,0.94 0.83,0.52 0.22,0.86 2.08,3.89 2.67,4.27 0.24,0.93 0.2,-0.99 -0.37,-0.72 0.04,-0.89 0.6,-1.82 -0.49,-1.5 0.2,-0.86 0.69,-0.02 1.38,1.67 0.8,0.72 0.39,0.17 0.27,-0.15 -0.42,-0.2 -0.5,-0.62 -0.39,-1.56 1.03,-1.18 -0.36,-0.19 -0.83,0.25 -0.17,-0.12 -0.53,-1.13 -1.19,-1.29 0.06,-1.23 -1.22,0.02 -0.83,-0.75 0.74,-0.03 1.6,0.36 0.74,-1.12 0.09,-0.58 -0.11,-0.44 -1.21,-0.24 -0.39,-0.35 -0.03,-0.99 0.15,-0.32 1.69,-0.37 0.87,0.68 -0.24,0.53 -0.56,0.15 1.16,1.22 0.57,0.12 0.02,-0.44 0.78,-1.06 1.32,0.19 0.58,0.26 0.29,0.19 0.39,0.93 0.3,0.21 1.12,0.06 0.56,-0.64 0.99,0.48 1.12,0.11 1.63,-0.23 1.16,0.51 0.62,-0.26 -0.84,-0.08 -1.28,-0.6 -0.89,-0.21 -0.57,-0.04 -0.89,0.26 -0.67,0 -0.19,-0.2 -0.27,-1.21 0.59,-1.34 0.44,-0.1 0.52,0.79 0.81,-0.56 -0.08,-1.03 0.32,-1.17 1.22,-1.23 -0.61,-0.25 -0.59,0.17 -0.88,1.5 -0.51,0.01 -0.95,-0.82 -0.31,-2.2 0.93,-2.13 0.34,-0.15 1.01,0.58 0.81,-0.42 0.19,-0.28 -0.12,-2.15 0.46,-0.11 2.25,1.15 0.88,0.85 2.04,0.99 -1.14,-1.01 -0.06,-0.25 0.52,-0.95 -0.23,-0.24 -0.93,-0.01 -1.08,0.4 -0.12,-0.64 0.4,-0.56 0.42,-0.2 0.31,0.2 0.43,-0.74 -0.34,-0.09 -1.42,0.94 -0.3,-0.01 -0.32,-0.85 0.35,-0.45 0.47,-0.22 0.64,0.19 0.23,-0.07 0.57,-0.4 -0.16,-0.38 0.65,-0.46 0.75,1.69 0.19,0.12 0.11,-0.48 -0.14,-0.96 1.28,0.75 0.03,0.4 0.43,0.21 1.01,-0.05 0.22,-0.21 -0.19,-0.16 -0.33,0.03 -0.29,-0.26 0.32,-0.31 -1.18,-0.84 -1.07,-0.53 0.36,-0.42 0.29,-0.1 -1.16,-1.72 1.17,-1.67 1.01,-0.84 0.57,0.24 2.18,0.05 0.11,-1.36 -0.21,-1.31 0.14,-0.75 0.28,-0.21 1.2,0.57 -0.94,3.98 0.2,-0.21 0.67,-2.31 1.31,0.67 -0.2,1.2 0.21,0.39 0.64,0.4 0.96,-1.07 0.51,-0.36 0.31,-1.91 0.83,-1.69 0.04,-0.7 -0.71,-1.82 -0.69,-0.44 0.54,-0.12 0.87,0.13 0.75,0.38 -0.09,0.84 -0.56,0.24 0.37,1.22 0.46,0.13 0.58,0.59 0.28,-0.44 -0.2,-0.59 0.43,-1 1.06,-0.84 0.77,-0.11 -0.51,1.25 1.23,1.59 0.35,0.1 1.12,-1.18 0.93,-1.69 -0.47,-1.96 1.22,-0.49 1.06,-0.25 0.67,0.54 0.62,0.8 -0.19,0.42 0.77,0.95 0.27,-0.43 0.01,-0.36 0.95,-0.04 1.99,0.64 1.04,1.47 1.49,1 3.25,4.52 0.47,-0.23 1.84,1.58 0.2,1.09 -0.52,0.75 -0.77,2.6 0.11,1.18 -0.07,2.13 -0.57,1.14 0.52,-0.3 0.3,-0.42 0.38,-2.46 0.54,0.22 0.82,0.81 0.32,1.06 0.05,-1.08 -0.73,-1.27 -0.35,-1.4 1.24,-1.7 0.22,0.04 0.29,1.43 1.03,0.03 0.11,-0.51 -0.43,-0.78 -0.34,-1.47 1.61,-0.46 5.04,1.26 0,0 0,5.9 0,0 0,20.99 0,0 0.06,101.589995 0,0 -0.13,70.22 0,0 -2.25,0.98 -2.59,1.51 -4.03,1.83 -1.85,0.74 -2.98,0.58 -4.37,1.69 -2.28,0.4 -4.75,0.22 -3.12,-0.3 -2.39,-0.69 -1.2,0.59 -1.05,-0.23 -1.8,0.98 -3.16,2.6 -0.77,0.34 -1.54,0.33 -3.33,1.84 -1.26,1.13 -1.44,0.87 -3.73,0.61 -1.31,0.52 -1,0.82 -0.91,1.16 -1.13,3.28 -0.51,2.15 -1.04,0.73 -0.98,1.03 -0.37,0.74 -0.01,0.35 -0.48,0.53 -1.63,1.11 -1.87,-0.14 -0.28,0.11 -0.65,0.88 -0.5,0.38 -0.74,0.24 -0.73,-1.72 -0.9,-0.38 -1.88,0.64 -1.25,-0.18 -1.48,0.06 -0.2,0.2 -1.55,0.16 -0.86,-0.17 -0.61,0.24 -0.39,0.45 -0.12,0.66 -1.44,0.15 -0.420004,-0.14 0.230004,-0.49 -0.320004,-1.13 -0.63,-0.81 -0.22,-0.08 -0.84,0.15 -0.6,0.57 -0.88,0.25 -2.8,-1.01 -0.67,-0.05 -1.36,-0.03 -3.09,0.54 -2.05,0 -0.77,0.41 -2.73,0.38 -1.34,0.74 -1.78,-0.45 -2.69,-0.14 -2.08,0.64 -0.8,0.88 -1.33,0.71 -0.57,0.65 -0.9,1.58 -0.15,0.8 -1.54,1.51 -1.27,0.75 -1.41,-0.5 -1.82,-0.17 -1.87,1.27 -0.22,0.33 0.38,0.42 -0.38,0.43 -0.88,0.54 -1.75,0.57 -0.64,0.66 -0.33,0.87 -1.15,0.86 -2.17,1.16 -2.65,0.48 -0.04,0.27 0.26,0.28 1.5,0.33 -0.67,0.38 -0.82,-0.15 -0.81,-0.64 -0.62,-0.23 -0.68,0.04 -0.34,0.24 -0.25,0.91 -0.83,-0.66 -2.18,-0.92 -4.15,-0.02 -0.57,0.53 -0.25,0.01 -1.61,-0.52 -1.33,0.21 -1.54,-0.44 -2.64,-1.76 -2.64,-0.61 -0.65,-1.53 -1.08,-1.25 -1.8,-1.84 -1.65,-1.1 -1.97,-1.03 -0.79,-0.09 -0.79,0.19 -0.5,0.65 -1.23,-1.31 0.01,-1.13 -0.57,-4.04 -0.04,-2.26 0.47,-2.18 0.46,0.13 0.67,1 1.29,0.55 1.03,-0.09 0.88,-0.32 0.36,-0.21 3.07,-4.42 -0.47,-3.64 -0.81,-4 0.25,-0.87 0.83,-1.03 -0.04,0.41 -0.62,0.69 -0.02,0.52 0.44,1.25 0.3,0.45 0.2,-0.14 -0.02,-0.7 0.5,-1.84 -0.32,-3.22 0.25,-1.65 -0.19,-1.23 0.06,-2.57 -0.41,-2.25 -0.26,-0.71 -2.65,-4.83 -0.75,-2.24 -0.63,-1.46 -1.55,-2.7 -1.31,-3.35 0.08,-0.34 -0.34,-2.54 -0.72,-2.48 -0.22,-0.19 0.05,-4.85 0.39,-2.27 -0.54,-1.89 -0.28,-0.45 -0.17,-1.16 -0.57,-1.35 -2.34,-2.78 -0.3,-0.91 -0.08,-2.02 -0.88,-1.78 -2.12,-3.17 -0.82,-0.5 -0.84,-1.2 -0.65,-2.93 0.14,-0.91 0.36,-0.85 -0.21,-1.27 -0.53,-1.85 -1.48,-3.07 -1.5000005,-2.81 -2.32,-3.35 -3.31,-3.52 -0.61,-1.93 0.5,-1 -0.07,-1.11 0.04,-0.29 0.21,-0.15 0.18,2.34 0.33,0.68 0.34,-1.92 1.61,1.99 0.22,0.65 0.13,2.05 0.25,0.74 0.8,1.02 0.34,0.07 0.03,-0.31 0.7,-0.48 0.46,0.11 0.7800005,-1.16 0.06,-2.06 -0.7800005,-1.04 -1.49,-0.98 -1.1,-1.14 -0.63,-2.6 -1.1,-1.78 0.19,-0.99 0.66,-1.05 0.31,0.23 1.01,1.82 1.15,0.99 0.4,1.13 -0.26,1.42 -0.3,0.33 0.03,1.02 0.32,0.93 0.55,0.05 0.37,-0.4 0.8700005,-1.68 0.57,2.82 0.3,0.77 1.2,1.61 1.36,-1.07 0.29,-0.97 -0.33,-0.47 -0.21,-0.85 0.37,-2.33 0.38,0.18 z m -11.2300005,1.73 -0.32,-0.26 -1.61,-2.44 -0.80999996,-1.63 -0.5,-1.88 0.07,-1.05 0.43,-0.62 0.53999996,0.13 -0.22,0.53 0.04,0.33 1.28,3.66 1.1,2 0.22,0.79 -0.22,0.44 z M 126.34219,59.020405 l -0.09,-0.31 -0.58,-0.54 0.09,-0.5 0.27,-0.43 0.71,-0.29 0.94,1.57 -1.34,0.5 z m -99.370004,61.759995 -0.37,-0.31 -0.27,0.26 -0.08,-0.09 0.01,-0.61 1.11,-1.5 0.36,-0.22 0.13,0.07 0.15,0.79 -0.05,0.35 -0.63,0.98 -0.36,0.28 z m 106.060004,-70.659995 -0.57,-0.31 0.07,-0.85 0.25,-0.64 0.51,-0.53 0.5,0.56 -0.25,1.22 -0.39,0.19 -0.12,0.36 z"
        title="Western Australia"
        id="AU-WA"
        onClick={() => openStateModal("WA")}
        fill="skyblue"
      />
      <path
        d="m 392.53219,306.2804 -1.26,-0.64 -1.44,-2.15 -0.29,-0.79 0.02,-1.84 0.52,-2.56 2.85,-2.1 1.27,0.72 0.57,0.67 1,0.37 0.67,0.43 -0.49,0.44 -1.01,-0.14 -0.81,0.39 -0.52,0.72 -0.62,2.49 0.24,2.75 -0.08,0.39 z"
        title="Australian Capital Territory"
        id="AU-ACT"
        onClick={() => openStateModal("NSW")}
        fill="greenyellow"
      />
      <path
        d="m 402.68219,327.7504 -19.25,-9.7 -0.98,-0.08 0.88,-1.52 0.11,-0.97 -1,-2.04 -0.69,-0.88 -0.56,-4.42 -1.18,-0.75 -1.82,-0.78 -0.93,0.36 -1.53,-0.29 -1.01,0.17 -1.01,1.26 -0.98,0.09 -1.82,0.64 -1.46,-0.1 -2.42,-0.76 -0.97,-0.76 -1.12,-0.17 -0.68,0.09 -0.38,0.4 -1.14,0.49 -2.25,-0.2 -3.1,-0.59 -0.76,-0.32 -1.28,-1.23 -0.79,-0.62 -0.27,-0.03 -0.82,0.18 -0.95,0.52 -0.95,-0.09 -0.37,-0.3 -1.33,0 -1.36,0.35 -0.2,0.24 -0.38,1.38 0.17,1.36 -1.92,0.54 -0.42,-0.11 -1.34,-0.78 -2.28,-2.67 -0.56,-1.28 -0.25,-0.26 -0.62,-0.2 -1.1,-0.98 -0.84,-1.16 -1.86,-0.99 -1.67,-1.27 -0.77,-0.28 -0.45,0.1 -0.67,-0.5 -0.18,-0.28 0.25,-0.76 -0.42,-0.65 -0.88,-0.22 -0.81,-0.5 -0.5,-1.1 -0.29,-1.65 0.26,-1.31 0.01,-0.83 -0.14,-0.21 -2.31,-1.26 -1.62,-0.11 -1.28,-0.52 -0.15,-0.36 -0.68,-0.45 -0.62,0.21 -0.19,0.27 -0.35,1.55 -0.49,0.62 -0.92,-0.18 -0.37,-0.43 0.03,-0.26 -0.58,-1.55 -0.94,-0.87 -0.05,-1.88 -1.51,-2.54 -0.87,-0.6 -1.25,-0.57 -1.7,0.35 -1.61,-0.42 -0.96,0.37 -0.61,0.84 -0.53,0.28 -0.19,-0.26 -1.21,-0.74 -1.78,-0.83 -1.87,-0.14 -0.33,-0.09 -0.51,-0.5 0,0 0.05,-63.7 0,0 1.29,-0.01 0,0 21.8,0.01 0,0 16.91,0 0,0 13.78,0 0,0 32.53,0 0.83,-0.41 1.27,-1.59 3.47,-2.95 1.2,-0.33 0.28,0.05 0.17,0.36 0.95,0.28 3.34,-0.29 1.56,-0.6 1.47,-0.18 0.3,0.07 0.83,0.86 0.75,0.51 1.81,0.05 1.64,-0.34 2.74,1.25 2.77,2.39 0.13,1.88 0.44,0.98 0.24,0.11 0.53,-0.13 0.52,-0.55 0.98,-2 1.87,-0.83 0.4,0.77 0.67,0.32 2.08,-1 0.35,-2.01 -0.98,-2.22 1.05,-0.83 1.22,-0.6 2.16,-0.71 0.44,-0.3 0.22,-0.56 0.62,-0.52 0.48,0.07 0.71,0.73 1.78,0.39 2.03,-0.21 1.79,0.12 0.83,-1.1 1.45,-0.27 1.19,-0.46 0.81,-0.66 0,0 0.78,0.71 0.15,0.81 -0.35,2.67 0.2,1.4 0.5,0.68 -0.2,2.48 -1.71,2.24 -1.2,3.52 0.3,0.87 -1.21,6.89 -0.53,2.02 -2.02,5.68 -0.14,3.35 0.17,0.61 0.38,0.05 0.19,0.77 -1.11,3.72 -0.21,1.47 -1.14,3.77 -0.96,1.96 -2.2,2.78 -0.5,1.3 0.32,1.69 -0.13,1.79 -1.89,1.6 -0.81,0.94 -1.67,1.04 -0.09,0.55 0.27,0.58 -2.08,0.73 -1.53,0.79 -1.55,2.33 -1.03,2.55 -0.24,0.2 -0.55,0.04 -0.51,0.41 -0.11,0.59 0.46,0.41 -0.35,1.39 -1.24,1.66 -0.47,3.5 -0.26,0.94 -0.39,0.3 -0.63,-0.07 -0.85,0.34 0.6,0.16 0.44,0.41 -0.88,1.43 -0.98,0.73 -0.97,1.43 -1.02,2.97 0.44,0.54 -0.54,2.46 -0.7,0.44 -0.22,0.76 0.38,1.11 0.76,0.79 -0.17,0.88 -0.29,0.25 -0.36,-0.39 0.13,-0.27 -0.15,-0.61 -0.29,-0.03 -0.69,0.43 -0.08,0.44 0.28,0.68 -0.61,0.68 -1.16,0.64 -0.59,1.11 -0.06,0.56 -0.8,2.32 -0.55,0.89 -2.1,4.6 -0.27,2.29 -0.02,2.9 -0.63,0.82 -0.58,3.22 -0.62,2.25 -0.69,1.74 0.05,1.97 1.08,1.25 0.14,0.94 -0.01,0.45 -0.32,-0.1 -0.46,0.34 0.02,1.58 0.36,1.54 z m -9.53,-22.32 0.08,-0.4 -0.24,-2.75 0.62,-2.48 0.52,-0.73 0.82,-0.39 1.01,0.14 0.48,-0.43 -0.67,-0.43 -1,-0.36 -0.57,-0.68 -1.27,-0.72 -2.85,2.1 -0.52,2.56 -0.02,1.85 0.29,0.79 1.45,2.15 0.26,0.22 1.09,0.37 0.52,-0.81 z"
        title="New South Wales"
        id="AU-NSW"
        onClick={() => openStateModal("NSW")}
        fill="greenyellow"
      />
      <path
        d="m 254.26219,283.5504 -1.08,1.74 -0.88,0.39 -0.93,1.59 -1.12,0.7 -0.67,1.33 -0.77,2.33 0.27,0.13 0.48,-0.06 1.45,-1.02 0.15,0.69 -0.17,2.59 -0.52,0.22 -0.29,-0.55 -0.91,-1.01 -0.65,-0.4 -0.68,0.1 -0.48,1.13 -0.39,-0.01 -0.41,-0.79 -1.43,-1.87 -1.61,-1.66 -0.85,-0.68 -0.35,-0.11 -1.12,0.39 0.43,-1.19 0.62,-0.89 0.05,0.82 1.42,1.52 0.57,0.39 1.08,-0.35 -1.1,-0.44 -0.14,-0.41 -0.06,-0.34 0.18,-0.4 -0.48,-2.7 -0.83,-2.21 -0.13,-1.48 -0.73,-1.13 -1.74,-1.96 -2.09,-1.7 0.3,-1.25 -0.11,-0.9 -0.54,-1.54 -1.1,-2.27 -1.24,-0.48 -2.01,0.32 -0.86,0.49 -0.66,-0.74 0.01,-0.33 -0.8,-2.13 -1.32,-3 0.87,0.06 0.43,0.4 0.15,0.65 0.74,-1.01 0.22,-0.66 -0.22,-1.14 -0.77,-1.09 -0.68,-0.59 -0.31,-0.05 -1.72,0.54 -0.7,0.67 -0.41,-0.08 0.02,-1.04 0.31,-0.71 0.55,0.22 0.18,-0.3 -1.35,-1.88 -1.09,-0.64 -0.68,-0.61 0.12,-0.47 -0.74,-0.23 -0.27,0.22 -0.16,0.65 -0.89,0.56 -3.46,-0.24 -0.33,-0.08 -0.76,-0.82 -1,-0.36 -1.53,-1.45 -0.52,-0.28 -2.18,-0.26 -1.04,0.21 -0.81,0.75 -0.94,0.33 -0.68,0.05 -0.75,-0.19 -1.83,-1.85 -2.8,-2.03 -4.39,-2.27 -2.35,-0.88 -0.36,0.04 -1.11,0.9 -1.83,0.71 -0.55,0.07 -5.76,-0.43 -1.24,0.04 -2.31,0.18 -1.06,0.27 -6.58,0.56 -2.5,0.41 0,0 0.06,-70.18 0,0 9.71,-0.07 0,0 14.47,0.01 0,0 73.46,-0.01 0,0 32.57,0 0.03,36.55 0,0 -0.05,63.7 0,0 -0.28,-0.37 -0.04,54.4 0,0 -1.27,-0.13 -0.86,0.26 -0.79,-0.03 -1.83,-0.98 -1.89,-1.9 -1.28,-2.59 -1.27,-1.93 -0.78,-0.55 -0.61,0.03 -1.95,-2.62 -0.68,-1.36 0.34,-0.7 -0.03,-0.55 -0.51,-1.27 0.2,-1.25 0.77,-0.64 0.42,-1.08 -0.01,-1.81 -0.4,-1.43 -1.9,-4.63 -3,-4 -1.98,-2.13 -1.16,-0.94 0.53,0.17 2.96,2.59 1.96,2.69 0.83,1.71 -0.12,-0.93 -0.5,-1.41 -0.41,-0.61 -1.29,-1.49 -3.78,-3.62 -0.02,-1.18 0.67,-0.27 0.82,0.71 -0.1,1.67 0.17,0.23 1.02,-0.11 0.28,-1.16 0.13,-1.77 -0.18,-1.27 -1.56,-0.77 -0.84,0.83 -0.6,0.18 -0.64,-0.03 -0.55,0.24 -0.22,0.54 0.11,0.35 0.62,0.2 0.21,0.26 -0.49,0.63 -2.93,-0.25 -0.77,0.32 -0.65,0.79 -0.59,0.41 -3.92,0.21 -0.89,-0.67 0.65,-1.15 1.44,-0.72 1.66,-1.79 0.31,-1.75 -0.13,-0.46 0.11,-0.84 0.53,-1.16 -0.36,-2.14 0.25,-1.18 -0.09,-0.58 -0.66,-1.14 -1.74,-2.13 -0.6,-2.16 -1.38,-2.35 -0.26,0.06 -0.66,1.54 0.29,0.58 -0.16,0.55 -1.03,1.06 -0.38,1.31 -0.15,2.44 -1.37,4.46 -0.01,1.1 -0.8,0.65 -1.54,-0.7 -0.79,-0.2 -0.42,0.08 -2.04,0.77 -0.46,0.75 -0.26,0.17 -1.51,-0.23 -0.84,0.74 -0.62,0.23 -0.35,-0.17 -0.31,-0.52 0.4,-0.65 0.74,-0.73 0.26,-0.63 0.18,-1.86 0.51,-0.75 0.91,0.36 0.93,-0.25 0.96,-0.06 0.19,0.3 0.93,0.42 0.54,-0.29 0.22,-0.55 0.48,-3.14 -0.19,-2.45 0.13,-2.43 -0.45,-1.65 0.16,-0.22 0.53,0 0.32,-0.62 0.55,-1.82 0.09,-0.94 1.9,-2.43 1.22,-1.2 0.46,-0.13 0.18,-0.47 -0.35,-1.53 -1.1,-2.11 0.33,-0.98 0.62,-0.44 0.58,-0.23 0.7,-0.02 0.3,-0.24 -0.08,-0.66 -0.33,-0.63 -0.59,-0.25 -0.63,-2.86 -0.57,-1.27 -0.3,-1.55 -0.58,-0.44 -0.09,2.09 0.25,0.14 0.25,0.44 0.07,1.37 -0.36,1.86 -0.57,0.03 -1.38,0.44 -1.16,1.26 -1.12,2.23 -0.06,1.07 -0.2,0.6 -1.64,3.07 -0.74,0.62 -1.32,0.05 -0.77,-0.47 -0.71,1.06 0.2,0.14 -0.42,0.44 -3.08,1.63 -1.81,1.42 -0.62,0.64 -0.06,0.42 -0.54,1.02 z m 17.43,20.18 1.65,0.45 0.53,0.72 0.01,0.7 -0.79,0.71 -1.29,-0.63 -1.74,-0.13 -1.53,0.72 -0.2,0.28 0.14,0.92 -0.31,0.31 -1.42,0.7 -1.06,-1.08 -1.43,-0.27 -0.4,0.13 -0.12,0.49 -0.31,0.18 -1.29,-0.12 -1.43,0.22 -2.04,0.06 -0.35,-0.58 -1.54,-1.28 -0.05,-0.47 0.51,-1.5 3.98,-1.18 0.85,-0.01 1.02,-0.24 2.14,-0.95 2.27,0.19 0.64,0.61 -0.01,1.08 0.15,0.2 1.04,0.14 1.07,0.61 0.64,0.05 0.67,-1.03 z"
        title="South Australia"
        id="AU-SA"
        onClick={() => openStateModal("SA")}
        fill="orangered"
      />
      <path
        d="m 398.35219,330.7904 -1.32,0.65 -1.6,0.16 -5.25,0.03 -1.82,0.26 -1.79,-0.07 -2.01,0.14 -3.75,1.11 -2.22,1.1 -2.37,1.8 -1.83,1.71 -1.73,1.72 -2.64,3.07 -1.04,0.92 -2.43,0.31 -2.38,0.6 -0.85,-0.27 -0.99,0.06 -0.45,0.19 -0.38,0.57 1.21,2.21 1.25,-0.88 0.23,-0.84 0.39,0.18 0.16,3.76 -0.64,0.81 -0.34,0.17 -0.51,-0.24 -0.3,-0.45 -0.79,-2.07 -1.14,-1.43 -0.84,-0.36 -0.53,0.17 -0.15,0.43 -1.07,-0.09 -0.88,-1.78 0.26,-0.42 -0.34,-0.64 -0.96,-0.15 -0.75,0.5 -0.55,0.09 -0.45,-0.26 -1.63,-1.65 0.18,-1.29 0.96,-0.4 0.38,-0.67 -0.76,-1.74 -0.45,-0.29 -2.05,0.15 -0.46,1.54 -1.98,2.04 -0.96,0.19 -0.44,-0.07 -1.52,-1.77 1.29,0 1.14,-0.51 1.59,-2.8 -0.35,-1.29 -1.34,-2.07 -0.63,-0.32 -1.01,0.46 -1.45,1.39 -1.78,1.33 -1.53,0.16 -0.19,0.19 0.06,0.5 1.5,0.26 0.84,-0.29 0.5,-0.37 0.75,0.21 0.16,0.4 -0.12,0.61 -0.56,0.86 -0.27,0.2 -0.93,-0.22 -1.67,0.36 -0.35,0.21 -3.27,2.21 -2.38,2.93 -1.2,0.33 -0.4,0.28 -0.24,0.61 -1.41,1.04 -0.41,-0.11 -0.67,-0.79 -0.61,-0.36 -2.25,-0.72 -0.51,-0.52 -0.92,-0.57 -0.83,-0.11 -1.83,-0.74 -2.91,-2.25 -1.69,-0.67 -1.2,0.29 -0.2,0.23 -0.98,-0.02 -1.06,-0.61 -1.06,-0.88 -1.56,-0.34 -0.76,-0.01 -0.78,0.22 -0.64,0.54 0,0.43 0.33,0.65 -0.86,0.24 -1.27,-0.62 -0.94,-1.14 -1.89,-1.77 -0.97,-0.64 -1.47,-0.68 0,0 0.04,-54.4 0.28,0.37 0,0 0.51,0.5 0.33,0.09 1.87,0.14 1.78,0.83 1.21,0.74 0.19,0.26 0.53,-0.28 0.61,-0.84 0.96,-0.37 1.61,0.42 1.7,-0.35 1.25,0.57 0.87,0.6 1.51,2.54 0.05,1.88 0.94,0.87 0.58,1.55 -0.03,0.26 0.37,0.43 0.92,0.18 0.49,-0.62 0.35,-1.55 0.19,-0.27 0.62,-0.21 0.68,0.45 0.15,0.36 1.28,0.52 1.62,0.11 2.31,1.26 0.14,0.21 -0.01,0.83 -0.26,1.31 0.29,1.65 0.5,1.1 0.81,0.5 0.88,0.22 0.42,0.65 -0.25,0.76 0.18,0.28 0.67,0.5 0.45,-0.1 0.77,0.28 1.67,1.27 1.86,0.99 0.84,1.16 1.1,0.98 0.62,0.2 0.25,0.26 0.56,1.28 2.28,2.67 1.34,0.78 0.42,0.11 1.92,-0.54 -0.17,-1.36 0.38,-1.38 0.2,-0.24 1.36,-0.35 1.33,0 0.37,0.3 0.95,0.09 0.95,-0.52 0.82,-0.18 0.27,0.03 0.79,0.62 1.28,1.23 0.76,0.32 3.1,0.59 2.25,0.2 1.14,-0.49 0.38,-0.4 0.68,-0.09 1.12,0.17 0.97,0.76 2.42,0.76 1.46,0.1 1.82,-0.64 0.98,-0.09 1.01,-1.26 1.01,-0.17 1.53,0.29 0.93,-0.36 1.82,0.78 1.18,0.75 0.56,4.42 0.69,0.88 1,2.04 -0.11,0.97 -0.88,1.52 0.98,0.08 19.25,9.7 0,0 -0.85,0.54 -1.24,0.11 -1.22,1.86 -0.98,0.5 z m -45.84,9.55 -0.78,-0.3 -0.14,-0.63 0.27,-0.89 1.74,0.36 0.44,0.52 -0.12,0.2 -0.7,0.01 -0.71,0.73 z m -0.02,1.92 -0.37,-0.45 -0.53,-0.23 -1.68,0.14 0.03,-0.15 0.76,-0.74 1.01,-0.2 0.29,0.19 0.58,1.39 -0.09,0.05 z"
        title="Victoria"
        id="AU-VIC"
        onClick={() => openStateModal("VIC")}
        fill="salmon"
      />
      <path
        d="m 402.68219,140.4104 0,0.18 0.67,0.64 -0.56,-1.93 -0.71,-1.46 0.01,-0.55 0.42,-1.11 0.43,-0.56 0.48,-0.13 0.38,0.16 0.83,1.28 0.49,1.39 1.32,0.54 1.72,1.18 1.23,0.56 -0.63,-1.49 -0.01,-0.88 0.3,-0.61 0.79,0.14 0.77,1.15 -0.32,0.74 0.08,0.57 1.47,2.09 -0.69,4.67 0.61,1.26 -0.13,1.68 0.72,1.46 0.88,0.48 0.81,0.12 0.31,0.71 0.74,0.56 0.52,1.5 0.77,0.42 0.36,0 0.51,0.36 1.15,1.42 0.74,0.22 0.58,0.46 -0.17,0.27 0.07,0.33 0.3,0.12 0.53,-0.52 0.02,-0.64 0.26,-0.25 0.48,0.14 1.13,1.3 1.58,1.41 0.83,2.47 1.32,2.16 1.58,1.21 1.53,0.6 0.54,0.62 0.32,0.77 0.11,1.43 1.78,2.95 1.49,0.45 1.07,0.07 0.42,1.76 -0.13,1.06 -0.44,0.45 0.06,1.4 0.24,0.67 0.36,0.34 0.33,0.09 0.58,1.42 1.56,0.71 0.04,0.29 -0.52,1.13 -0.71,2.9 0.2,0.78 0.27,3.57 0.3,0.73 0.15,4.27 -0.67,0.21 -0.66,0.93 0.33,1.66 1.19,0.92 0.88,1.1 0.68,2.33 0.92,1.29 0.32,0.87 -0.24,1.63 0.54,1.36 0.5,0.7 0,0 -0.81,0.66 -1.19,0.46 -1.45,0.27 -0.83,1.1 -1.79,-0.12 -2.03,0.21 -1.78,-0.39 -0.71,-0.73 -0.48,-0.07 -0.62,0.52 -0.22,0.56 -0.44,0.3 -2.16,0.71 -1.22,0.6 -1.05,0.83 0.98,2.22 -0.35,2.01 -2.08,1 -0.67,-0.32 -0.4,-0.77 -1.87,0.83 -0.98,2 -0.52,0.55 -0.53,0.13 -0.24,-0.11 -0.44,-0.98 -0.13,-1.88 -2.77,-2.39 -2.74,-1.25 -1.64,0.34 -1.81,-0.05 -0.75,-0.51 -0.83,-0.86 -0.3,-0.07 -1.47,0.18 -1.56,0.6 -3.34,0.29 -0.95,-0.28 -0.17,-0.36 -0.28,-0.05 -1.2,0.33 -3.47,2.95 -1.27,1.59 -0.83,0.41 -32.53,0 0,0 -13.82,0 0,0 -16.9,0 0,0 -21.8,-0.01 0,0 -1.3,0.03 0,0 -0.02,-36.54 -32.57,0 0,0 0,-109.549995 0,0 2.11,1.72 1.04,0.4 2.13,0.51 1.66,-0.1 0.52,0.38 1.69,0.71 1.82,0.26 1.42,1.97 0.23,1.46 0.55,1.06 0.52,0.51 0.83,0.29 1.09,0.13 1.07,0.71 0.88,0.89 2.15,0.62 0.74,0.44 1.05,0.94 0.43,0.18 1.23,0.07 2.87,-0.52 1.49,-0.55 0.93,-0.5 1.5,-1.16 0.82,-0.29 0.57,-1.04 0.61,-2.36 0.16,-1.69 2.58,-3.35 1,-2.26 0.32,-1.64 1.21,-3.18 -0.28,-1.89 0.65,-4.14 1.89,-4.33 0.34,-1.37 -1.07,-2.94 -0.49,-3.15 0.16,-0.92 0.62,-1.59 0.08,-1.24 -0.24,-0.87 -1.09,-1.3 -0.09,-1.34 0.79,-3.28 1.59,-3.09 -0.12,-0.49 -0.5,-0.56 -0.49,-1.92 0.09,-0.32 0.14,-0.25 1.11,-0.7 0.42,-0.51 0.53,-1.47 0.65,0.2 0.35,0.6 0.01,0.89 0.46,0.7 0.09,-0.47 -0.61,-1.78 -0.48,-0.35 -1.32,-1.98 0.32,-0.26 -0.21,-0.16 -0.71,-0.05 -0.09,0.65 0.34,0.46 -0.63,0.2 -0.38,-0.17 0.02,-0.25 1.02,-2.21 0.95,-1.31 -0.17,-0.38 0.49,-1.4 0.47,-0.7 0.47,-0.21 0.27,1.32 1.16,-0.23 0.09,-0.27 -0.88,-0.86 -0.04,-0.45 0.24,-1.28 1.67,-4.8 0.39,-2.45 -0.22,-1.9300002 0.1,-0.27 0.4,-0.29 1.72,-0.3 0.61,-0.81 0.49,-1.23 0.81,-0.03 1.02,0.48 -0.34,0.52 -0.72,0.66 -0.08,1.01 0.69,-0.88 0.39,0.03 1.47,1.25 0.47,1.0300002 0.84,3.42 -0.28,1.32 0.3,2.25 -0.08,1.29 1.18,1.04 0.75,0.06 0.71,-0.32 0.31,0.12 0.73,0.8 -1.05,1.69 -0.22,0.93 -0.05,1.21 0.56,0.16 0.34,-0.09 0.96,0.47 0.3,0.33 0.04,1.16 0.48,0.5 0.41,0.04 0.74,0.56 -0.6,1.39 -0.14,1.17 0.47,0.24 1.07,-0.12 0.11,0.22 -0.17,2.43 0.25,2.28 0.08,0.4 0.43,0.41 0.28,0.6 -0.09,1.04 -0.61,2.56 0.77,2 0.92,0.97 0.14,1.8 0.42,1.49 0.49,1.05 0.37,0.4 0.78,0.42 1.35,0.01 1.54,-1.2 3.06,-1.4 0.45,-1.01 0.43,0.1 0.68,1.02 -0.13,1.06 0.52,1.41 0.68,0.81 1.64,0.63 0.74,0.05 0.68,1.51 2.68,1.21 1.19,0.93 -0.07,0.66 -0.82,1.45 0.04,0.66 0.43,0.71 0.14,0.83 -0.44,1.29 0.61,1.21 0.59,2.01 0,2.03 0.55,0.55 0.57,1.33 -0.18,2.3 -0.41,0.57 -0.07,1.16 0.1,0.33 0.57,0.36 3.71,4.63 0.36,-0.3 1.01,-0.17 0.26,0.32 -0.84,1.59 0.05,0.35 0.77,1.32 0.85,1.99 0.58,2.13 0.2,1.57 -0.2,1.08 0.16,1.16 -0.07,0.75 -1,2.12 0.08,1.09 2.2,2.88 1.32,0.5 -0.08,1.27 -0.49,1.14 -0.14,1.21 0.1,0.38 0.63,0.84 0.95,0.74 0.27,0.519995 1.27,0.83 0.97,0.46 1.19,0.03 1.33,1.33 0.74,0.03 1.29,0.42 0.73,0.69 1.24,0.26 1.94,-0.15 0.16,-0.34 -0.49,-0.85 0.62,0.71 1.05,1.89 0.43,2.2 0.26,0.53 0.55,0.59 0.59,0.14 0.5,-0.12 -0.17,-0.93 0.08,-0.4 0.66,0.01 0.32,0.34 0.13,1.27 0.52,0.49 0.65,0.28 1.36,-0.06 1.34,0.39 0.86,1.04 -0.35,0.14 0.09,0.31 0.64,0.79 0.86,0.7 0.57,-0.25 0.04,-0.68 -0.34,-0.31 0.15,-0.4 0.75,0.28 1.64,1.47 1.04,0.19 0.37,0.51 0.69,1.94 0.41,0.11 0.33,0.92 -0.61,-0.15 -0.52,-0.53 -0.44,-0.21 -0.53,0.22 -0.8,0.99 0.67,1.8 1.31,1.37 0.78,0.54 1.16,0.41 1.44,1.12 0.59,0.75 -0.11,0.86 0.38,1.44 0.54,0.46 0.42,1.38 0.62,1.09 0.62,0.59 -0.14,2.21 0.99,3.54 0.75,1.82 0.69,0.99 0.47,0.38 0.03,1.19 -0.33,0.5 0.73,-0.37 0.58,-0.48 0.27,-0.45 1.7,2.11 z m 33.7,38.18 -0.47,-0.1 -0.44,-0.59 -0.59,-2.15 0.58,-1.42 0.73,-1.21 -0.01,-1.03 -0.15,-0.26 0.45,-0.94 1.13,-0.91 0.5,-0.98 0.09,-0.53 -0.11,-0.41 -0.65,-1.06 -0.21,-0.12 0.41,-0.76 0.93,-0.61 0.09,2.44 0.25,0.55 0.52,0.34 0.11,0.42 -2.65,6.24 -0.48,1.57 0.16,0.97 -0.19,0.55 z m -151.26,-104.789995 -0.11,-0.66 0.29,-1.15 0.62,-0.86 0.91,-0.69 1.88,-0.23 0.59,-0.32 2.09,0.34 0.06,0.66 -0.47,0.22 -0.71,0.15 -0.47,-0.38 -1,0.4 0.16,0.35 -0.67,1.11 -1.21,0.46 -1.57,0.29 -0.39,0.31 z m 131.13,80.889995 -0.59,-0.55 -0.42,-0.93 -0.73,-0.66 -0.42,-0.94 -0.1,-0.82 0.48,-0.11 1.52,0.96 0.21,0.35 0.7,1.34 0.13,0.92 -0.29,0.35 -0.49,0.09 z m -53.6,-61.269995 -0.75,-0.29 -0.21,-1.04 -0.48,-0.65 -0.5,-0.24 -0.27,-0.5 0.45,-0.11 1.54,0.72 0.9,1.3 -0.32,0.62 -0.36,0.19 z m 77.26,108.569995 -0.19,-0.42 0.06,-1.04 0.42,-2.38 0.42,-0.1 0.75,0.13 -0.72,2.38 -0.23,1.37 -0.51,0.06 z m 0.2,-4.48 -0.72,-2.02 0,-1.64 0.93,-0.51 0.24,0.18 -0.56,2.12 0.11,1.87 z m -122.04,-190.2799952 -0.68,-0.55 -0.05,-0.69 0.65,-0.43 0.45,-0.09 0.53,0.8 -0.07,0.41 -0.52,0.13 -0.31,0.42 z m 1.05,-5.54 -0.75,-0.32 -0.23,-0.36 0.42,-0.64000003 0.6,-0.11 0.36,0.17 0.25,0.44 -0.65,0.82000003 z m -30.96,76.4500002 -0.31,-0.65 1.11,-1.04 0.56,0.4 0.18,0.83 -1.28,-0.03 -0.26,0.49 z"
        title="Queensland"
        id="AU-QLD"
        onClick={() => openStateModal("QLD")}
        fill="brown"
      />
      <path
        d="m 369.45219,414.7604 -0.9,0.45 -0.2,-0.45 -1.4,-0.22 -0.94,-0.71 -0.92,-0.2 -2.37,-0.12 -0.23,-0.16 -0.16,-0.43 -0.31,-0.09 -1.31,0.4 -0.78,-0.26 -1.15,-1.81 0.64,-0.45 1.2,0.18 0.59,0.32 0.82,0.17 0.02,-0.98 -0.77,-0.64 -0.42,0.76 -2.89,-0.37 -0.24,-0.17 -1.19,-2.43 -1.43,-2.28 -0.23,-0.23 -0.68,0.03 -0.56,-0.9 -0.4,-0.85 -0.75,-2.77 -0.47,-0.51 -0.55,-0.16 -0.68,-4.38 0.08,-0.83 0.2,-0.26 0.29,0.52 1.91,1.46 0.47,2.18 0.9,-2.52 -0.57,-0.4 -0.45,0.04 -1.93,-2.12 -0.21,-0.6 0.02,-0.88 -0.16,-0.66 -0.69,-1.41 -1.41,-1.33 -1.09,-1.93 -2.92,-7.17 0.1,-0.51 -0.3,-1.52 -0.33,-0.62 -0.2,-1.44 0.88,-0.8 0.02,-1.66 0.66,-0.44 2.43,0.29 1.42,1.05 1.72,-0.28 0.66,0.56 2.21,0.72 3.62,2.15 3.48,1.64 2.3,0.21 1.02,-0.31 0.94,0.53 -0.05,-0.5 0.85,-0.9 0.77,-0.27 0.57,0.18 0.24,0.95 0.57,0.29 0.91,-0.02 -0.32,-0.46 -0.76,-0.17 -0.22,-0.21 -0.05,-0.69 0.49,-0.45 1.66,-0.75 1.41,0.47 2.27,-0.46 0.66,0.59 0.78,-0.47 1.09,-1.89 0.24,-0.15 0.69,-0.17 0.26,0.38 1.13,0.51 0.38,-0.02 0.69,-0.4 0.35,-0.59 0.19,-0.87 0.22,-0.24 0.46,0.02 0.71,0.33 1.54,1.14 0.57,0.75 0.6,1.35 -0.69,2.46 0.08,0.74 0.45,0.59 0.04,1.09 -0.47,1.72 0.07,1.23 0.37,1.07 -0.54,2.92 0.36,3.2 0.66,1.07 0.06,1.66 -0.57,0.81 -0.39,-0.33 -0.05,-0.35 0.29,-0.37 0.13,-0.96 -0.77,-2.07 -0.47,-0.77 -1.26,2.5 -0.82,5.93 -0.49,0.5 -0.16,0.84 0.12,1.52 -0.78,0.81 -0.44,1.48 0.15,0.24 0.47,-0.03 -0.2,-0.43 0.32,-0.24 0.69,0.42 0.28,0.55 0.06,1.03 -0.41,0.27 -0.17,1.29 0.58,1.31 -0.1,0.84 -0.27,0.02 -0.77,-0.68 -0.78,0.34 -0.41,0.61 -1,-1.24 -0.71,-1.45 -0.14,-0.71 0.6,-1.07 0.35,-0.1 0.26,0.24 0.05,0.36 -0.17,0.35 0.67,0.72 0.93,-0.07 0.34,-0.29 -0.8,-1.4 -2.54,-1.55 -0.37,0.06 -0.6,0.45 0.21,1.01 0.34,0.74 -0.29,0.58 -1.07,0.35 -0.25,-0.62 0.21,-0.13 -0.16,-1.5 -0.98,-0.63 0.34,0.86 -0.24,1.54 -0.63,0.77 -0.29,1.08 0.22,1.04 -0.16,0.97 -0.37,0.24 -0.38,-0.05 -0.87,-0.56 -0.79,-0.93 -0.15,-0.94 -0.23,-0.09 -0.23,0.37 -0.01,1 1.37,1.25 -0.44,1.1 -0.57,0.89 -0.54,1.57 -0.16,1.08 z m 13.16,-48.64 -0.98,-0.54 -0.28,-1.06 0.06,-0.3 -1.24,-2.33 -1.55,-1.38 1.32,-1.74 0.93,-0.4 2.15,2.87 0.4,0.29 0.83,0.22 0.09,0.41 0.51,2.79 -0.04,0.38 -0.3,0.28 -1.37,0.25 z m -45.67,-1.95 -0.38,-0.28 -0.14,-0.73 0.2,-0.15 0,-0.98 -0.62,-0.81 0.03,-0.77 0.19,-2.27 0.85,-0.63 0.13,-0.37 -0.11,-0.81 0.46,-0.13 0.97,0.59 0.45,0.65 0.15,2.29 0.26,1.47 -0.1,0.77 -0.33,0.74 z m 47.95,5.2 -0.03,-0.69 -0.19,-0.28 -2.52,0.32 -0.97,-0.42 0.02,-0.55 0.72,-0.59 0.74,-0.04 0.76,0.23 1.52,-0.77 1.48,1.76 -0.02,0.15 -0.75,0.29 z m -11.25,43.83 -0.69,-0.32 -0.69,0.15 -0.57,-1.19 1.92,-2.37 0.7,1.83 -0.48,1.74 z m 0.64,-3.73 -0.75,-1.57 0.7,-1.22 0.43,0.66 0.39,1.81 -0.03,0.17 z m 7.09,-7.54 0.05,-1.96 0.63,-0.48 0.56,0.05 0.49,0.96 -0.05,0.15 -0.76,0.01 z m -33.93,-29.34 -0.19,-0.14 -0.05,-0.69 0.65,-0.77 0.98,1.12 z"
        title="Tasmania"
        id="AU-TAS"
        onClick={() => openStateModal("TAS")}
        fill="blue"
      />
    </svg>
  );
};

export default States;
