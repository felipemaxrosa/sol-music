import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity/client";

const builder = client ? imageUrlBuilder(client) : null;

type ImageSource = Parameters<NonNullable<typeof builder>["image"]>[0];

/** Resolve uma imagem do Sanity (null quando não há projeto configurado). */
export function urlFor(source: ImageSource) {
  return builder ? builder.image(source) : null;
}
