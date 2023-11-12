import { TypeAnimation } from "react-type-animation"

export const AutoWritingText = () => {
    return (
    <TypeAnimation
      sequence={[
        'My last name is Černoš',
        2000,
        'I am Currently studying VUT Faculty of informational technologies',
        2000,
        'I live in Brno',
        2000,
        'I enjoy coding',
        2000,
        'Love to meet new people',
        2000, 
        'One day, i will be the best frontend developer you know :)'
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    )
}