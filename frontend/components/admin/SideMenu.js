"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function SideMenu() {

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [acountantSubmenuOpen, setAcountantSubmenuOpen] = useState(false);
  const [crmSubmenuOpen, setCrmSubmenuOpen] = useState(false);

  useEffect(() => {
    console.log(sideMenuOpen);
  }, [sideMenuOpen]);

  return (
    <>
      <div className={`z-40 h-full ${sideMenuOpen ? "w-64" : "w-22"}`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-backgroundSecondary">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center p-2 text-foregroundPrimary rounded-lg hover:bg-backgroundThird group"
              >
                <i className="fi fi-br-home w-5 h-5"></i>
                <span className={`ml-3 ${sideMenuOpen ? "" : "hidden"}`}>
                  Acasă
                </span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-foregroundPrimary rounded-lg hover:bg-backgroundThird group"
                onClick={() => {
                  setAcountantSubmenuOpen(!acountantSubmenuOpen);
                  setSideMenuOpen(true);
                }}
              >
                <i className="fi fi-br-bank w-5 h-5 flex-shrink-0"></i>
                <span
                  className={`ml-3 flex-1 text-left whitespace-nowrap ${
                    sideMenuOpen ? "" : "hidden"
                  }`}
                >
                  Contabilitate
                </span>
                <i
                  className={`fi fi-br-angle-small-down w-5 h-5 ${
                    sideMenuOpen ? "" : "hidden"
                  }`}
                ></i>
              </button>
              <ul
                className={`${
                  acountantSubmenuOpen ? "" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 rounded-lg pl-11 group hover:bg-backgroundThird"
                  >
                    Proforme
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 rounded-lg pl-11 group hover:bg-backgroundThird"
                  >
                    <span className="flex-1 whitespace-nowrap text-left">
                      Facturi
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-mediu rounded-full bg-utilityRed">
                      3
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-1 text-sm font-mediu rounded-full bg-utilityBlue">
                      3
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-1 text-sm font-mediu rounded-full bg-utilityGreen">
                      5
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-foregroundPrimary rounded-lg hover:bg-backgroundThird group"
                onClick={() => {
                  setCrmSubmenuOpen(!crmSubmenuOpen);
                  setSideMenuOpen(true);
                }}
              >
                <i className="fi fi-br-users w-5 h-5 flex-shrink-0"></i>
                <span
                  className={`ml-3 flex-1 text-left whitespace-nowrap ${
                    sideMenuOpen ? "" : "hidden"
                  }`}
                >
                  CRM
                </span>
                <i
                  className={`fi fi-br-angle-small-down w-5 h-5 ${
                    sideMenuOpen ? "" : "hidden"
                  }`}
                ></i>
              </button>
              <ul
                className={`${crmSubmenuOpen ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 rounded-lg pl-11 group hover:bg-backgroundThird"
                  >
                    Clienți
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 rounded-lg pl-11 group hover:bg-backgroundThird"
                  >
                    <span className="flex-1 whitespace-nowrap text-left">
                      Prospectare
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-mediu rounded-full bg-utilityRed">
                      3
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-1 text-sm font-mediu rounded-full bg-utilityBlue">
                      3
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-1 text-sm font-mediu rounded-full bg-utilityGreen">
                      5
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-foregroundPrimary rounded-lg hover:bg-backgroundThird group"
              >
                <i className="fi fi-br-calendar-clock w-5 h-5"></i>
                <span className={`ml-3 ${sideMenuOpen ? "" : "hidden"}`}>
                  Media plan
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-foregroundPrimary rounded-lg hover:bg-backgroundThird group"
              >
                <i className="fi fi-br-user-slash w-5 h-5"></i>
                <span className={`ml-3 ${sideMenuOpen ? "" : "hidden"}`}>
                  Concedii
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-foregroundPrimary rounded-lg hover:bg-backgroundThird group"
              >
                <i className="fi fi-br-gears w-5 h-5"></i>
                <span className={`ml-3 ${sideMenuOpen ? "" : "hidden"}`}>
                  Setări
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
