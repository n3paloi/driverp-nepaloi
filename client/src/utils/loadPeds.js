export default function loadPeds(peds, model) {
  peds.forEach(({ x, y, z, rot }) => {
    mp.peds.new(
      model,
      new mp.Vector3(x, y, z),
      rot,
      (streamPed) => {
        streamPed.setAlpha(50);
      },
      0
    );
  });
}
