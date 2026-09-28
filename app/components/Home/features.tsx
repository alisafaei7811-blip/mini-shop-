import { featuresList } from "./featursList";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Why Shop With Us?</h2>

        <p className="mt-3 text-gray-500">
          We make your shopping experience simple and reliable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuresList.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:bg-black group-hover:text-white">
                <Icon className="text-xl" />
              </div>

              <h2 className="mb-2 text-xl font-semibold">{feature.title}</h2>

              <p className="mb-6 min-h-[48px] text-sm leading-6 text-gray-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
