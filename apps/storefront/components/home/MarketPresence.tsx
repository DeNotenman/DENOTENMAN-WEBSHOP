"use client";

import { useEffect, useMemo, useState } from "react";

type MarketLocation = {
  name: string;
  x: number;
  y: number;
  days: readonly number[];
  label: string;
};

const MAP_SIZE = {
  width: 1672,
  height: 941,
} as const;

const POIS = {
  Haaren: { x: 84.57, y: 62.27, days: [0, 1, 2], label: "Zondag, maandag en dinsdag" },
  Uden: { x: 66.87, y: 50.8, days: [3], label: "Woensdag" },
  Hilvarenbeek: { x: 51.08, y: 54.41, days: [4], label: "Donderdag" },
  Antwerpen: { x: 17.17, y: 36.77, days: [5, 6], label: "Vrijdag en zaterdag" },
} as const satisfies Record<string, Omit<MarketLocation, "name">>;

const MARKET_LOCATIONS: MarketLocation[] = Object.entries(POIS).map(([name, location]) => ({
  name,
  ...location,
}));

const WEEKDAY_TO_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getAmsterdamDayIndex() {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "Europe/Amsterdam",
  }).format(new Date());

  return WEEKDAY_TO_INDEX[weekday] ?? new Date().getDay();
}

export function MarketPresence() {
  const [today, setToday] = useState<number | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const activeLocation = useMemo(
    () =>
      today === null
        ? null
        : MARKET_LOCATIONS.find((location) => location.days.includes(today)) ?? null,
    [today],
  );

  const selectedLocation =
    MARKET_LOCATIONS.find((location) => location.name === selectedName) ?? activeLocation;

  useEffect(() => {
    const dayIndex = getAmsterdamDayIndex();
    const currentLocation =
      MARKET_LOCATIONS.find((location) => location.days.includes(dayIndex)) ?? null;

    setToday(dayIndex);
    setSelectedName(currentLocation?.name ?? MARKET_LOCATIONS[0].name);
  }, []);

  return (
    <section className="landing-market-presence" aria-label="Marktlocaties van De Notenman">
      <p className="landing-market-presence__label">Vandaag op de markt</p>
      <div className="landing-market-presence__locations" role="list">
        {MARKET_LOCATIONS.map((location) => {
          const isActive = activeLocation?.name === location.name;
          const isSelected = selectedLocation?.name === location.name;

          return (
            <button
              className="landing-market-presence__location"
              type="button"
              key={location.name}
              data-active={isActive ? "true" : undefined}
              data-selected={isSelected ? "true" : undefined}
              aria-pressed={isSelected}
              onClick={() => setSelectedName(location.name)}
            >
              <span className="landing-market-presence__lamp" aria-hidden="true" />
              <span>{location.name}</span>
            </button>
          );
        })}
      </div>
      {selectedLocation ? (
        <p className="landing-market-presence__days">
          {selectedLocation.name}: {selectedLocation.label}
        </p>
      ) : null}
    </section>
  );
}

export function MarketMapBlinkers() {
  const [today, setToday] = useState<number | null>(null);

  const activeLocation = useMemo(
    () =>
      today === null
        ? null
        : MARKET_LOCATIONS.find((location) => location.days.includes(today)) ?? null,
    [today],
  );

  useEffect(() => {
    setToday(getAmsterdamDayIndex());
  }, []);

  if (!activeLocation) return null;

  const cx = (activeLocation.x / 100) * MAP_SIZE.width;
  const cy = (activeLocation.y / 100) * MAP_SIZE.height;

  return (
    <svg
      className="landing-market-map-blinkers"
      viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="landing-market-map-blinker" transform={`translate(${cx} ${cy})`}>
        <circle className="landing-market-map-blinker__halo" r="21" />
        <circle className="landing-market-map-blinker__ring" r="13" />
        <circle className="landing-market-map-blinker__core" r="5" />
      </g>
    </svg>
  );
}
