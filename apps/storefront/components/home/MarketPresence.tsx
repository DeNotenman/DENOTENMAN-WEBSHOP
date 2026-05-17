"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

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
  Haaren: { x: 83.13, y: 64.4, days: [0, 1, 2], label: "Zondag, maandag en dinsdag" },
  Uden: { x: 66.87, y: 53.45, days: [3], label: "Woensdag" },
  Hilvarenbeek: { x: 51.2, y: 54.41, days: [4], label: "Donderdag" },
  Antwerpen: { x: 17.46, y: 36.88, days: [5, 6], label: "Vrijdag en zaterdag" },
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
  const [today, setToday] = useState(getAmsterdamDayIndex);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const activeLocation = useMemo(
    () => MARKET_LOCATIONS.find((location) => location.days.includes(today)) ?? null,
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
  const mapRef = useRef<HTMLDivElement>(null);
  const [today, setToday] = useState(getAmsterdamDayIndex);
  const [mapStyle, setMapStyle] = useState<CSSProperties>({
    "--market-map-position": "50% 50%",
    "--market-marker-x": "50%",
    "--market-marker-y": "50%",
  } as CSSProperties);

  const activeLocation = useMemo(
    () => MARKET_LOCATIONS.find((location) => location.days.includes(today)) ?? null,
    [today],
  );

  useEffect(() => {
    setToday(getAmsterdamDayIndex());
  }, []);

  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement || !activeLocation) return;

    const updateMarkerPosition = () => {
      const { width, height } = mapElement.getBoundingClientRect();

      if (!width || !height) return;

      const isMobileHero = width <= 620;
      const focusX = isMobileHero ? activeLocation.x : 50;
      const focusY = isMobileHero ? activeLocation.y : 50;
      const scale = Math.max(width / MAP_SIZE.width, height / MAP_SIZE.height);
      const renderedWidth = MAP_SIZE.width * scale;
      const renderedHeight = MAP_SIZE.height * scale;
      const offsetX = (width - renderedWidth) * (focusX / 100);
      const offsetY = (height - renderedHeight) * (focusY / 100);
      const markerX = offsetX + renderedWidth * (activeLocation.x / 100);
      const markerY = offsetY + renderedHeight * (activeLocation.y / 100);

      setMapStyle({
        "--market-map-position": `${focusX}% ${focusY}%`,
        "--market-marker-x": `${markerX}px`,
        "--market-marker-y": `${markerY}px`,
      } as CSSProperties);
    };

    updateMarkerPosition();

    const resizeObserver = new ResizeObserver(updateMarkerPosition);
    resizeObserver.observe(mapElement);

    return () => resizeObserver.disconnect();
  }, [activeLocation]);

  if (!activeLocation) return null;

  return (
    <div
      className="landing-market-map-layer"
      data-location={activeLocation.name}
      ref={mapRef}
      style={mapStyle}
      aria-hidden="true"
    >
      <span className="landing-market-map-blinker">
        <span className="landing-market-map-blinker__halo" />
        <span className="landing-market-map-blinker__ring" />
        <span className="landing-market-map-blinker__core" />
      </span>
    </div>
  );
}
