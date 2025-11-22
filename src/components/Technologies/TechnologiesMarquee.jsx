import { useState } from "react";
import "./TechnologiesMarquee.css";

const defaultTechs = [
  { img: "/media/technologies/python.png", label: "Python", url: "https://www.python.org/" },
  { img: "/media/technologies/docker.png", label: "Docker", url: "https://www.docker.com/" },
  { img: "/media/technologies/kubernetes.png", label: "Kubernetes", url: "https://kubernetes.io/" },
  { img: "/media/technologies/spark.png", label: "Apache Spark", url: "https://spark.apache.org/" },
  { img: "/media/technologies/kafka.png", label: "Apache Kafka", url: "https://kafka.apache.org/" },
  { img: "/media/technologies/nifi.png", label: "Apache Nifi", url: "https://nifi.apache.org/" },
  { img: "/media/technologies/flask.png", label: "Flask", url: "https://flask.palletsprojects.com/" },
  { img: "/media/technologies/react.png", label: "React", url: "https://react.dev/" },
  { img: "/media/technologies/react-native.png", label: "React Native", url: "https://reactnative.dev/" },
  { img: "/media/technologies/scala.png", label: "Scala", url: "https://www.scala-lang.org/" },
  { img: "/media/technologies/postgresql.png", label: "PostgreSQL", url: "https://www.postgresql.org/" },
  { img: "/media/technologies/mongo.png", label: "MongoDB", url: "https://www.mongodb.com/" },
  { img: "/media/technologies/elastic.png", label: "Elasticsearch", url: "https://www.elastic.co/elasticsearch" }
];

export default function TechnologiesMarquee({ techs = defaultTechs, duration = 25 }) {
  const [pausedTop, setPausedTop] = useState(false);
  const [pausedBottom, setPausedBottom] = useState(false);

  const list = [...techs, ...techs];

  return (
    <div
      className="tm-marquee"
      aria-hidden="false"
    >
      <div
        className="tm-list"
        onMouseEnter={() => setPausedTop(true)}
        onMouseLeave={() => setPausedTop(false)}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: pausedTop ? "paused" : "running"
        }}
      >
        {list.map((t, i) => (
          <div className="tm-item" key={`l-${i}`}>
            <a className="tm-link" href={t.url} target="_blank" rel="noopener noreferrer">
              <img src={t.img} alt={t.label} />
              <span>{t.label}</span>
            </a>
          </div>
        ))}
      </div>

      <div
        className="tm-list tm-list-reverse"
        onMouseEnter={() => setPausedBottom(true)}
        onMouseLeave={() => setPausedBottom(false)}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: pausedBottom ? "paused" : "running"
        }}
      >
        {list.map((t, i) => (
          <div className="tm-item" key={`r-${i}`}>
            <a className="tm-link" href={t.url} target="_blank" rel="noopener noreferrer">
              <img src={t.img} alt={t.label} />
              <span>{t.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}