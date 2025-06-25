import { AnimatedTestimonials } from "../ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Indian elephants migrate through forests and clear paths, which helps smaller animals move around and They are very social and live in family groups.",
      name: "Indian Elephant",
      designation: "Scientific Name: Elephas maximus indicus",
      src: "/animals/md5.jpg",
    },
    {
      quote:
        "National animal of India And the Bengal tiger is a subspecies of tiger found in India, Bangladesh, Nepal, Bhutan, and Myanmar. It is the most numerous tiger subspecies in the world.",
      name: "Bengal Tiger",
      designation: "Scientific Name: Panthera tigris tigris",
      src: "/animals/md4.jpg",
    },
    {
      quote:
        "The peacock is the national bird of India, known for its vibrant plumage and iridescent tail feathers. It is a symbol of grace and beauty in Indian culture.",
      name: "Indian Peacock",
      designation: "Scientific Name: Pavo cristatus",
      src: "/animals/md3.jpg",
    },
    {
      quote:
        "The mugger crocodile is a large reptile found in freshwater habitats across the Indian subcontinent. It plays a crucial role in maintaining the ecological balance of its environment.",
      name: "Mugger Crocodile",
      designation: "Scientific Name: Crocodylus palustris",
      src: "/animals/md1.jpg",
    },
    {
      quote:
        "The Indian rhinoceros, also known as the one-horned rhinoceros, is a large herbivore native to the Indian subcontinent. It is known for its distinctive single horn and thick, wrinkled skin. Mostly found in Kaziranga National Park in Assam. ",
      name: "Indian Rhinoceros",
      designation: "Scientific Name: Rhinoceros unicornis",
      src: "/animals/md2.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
