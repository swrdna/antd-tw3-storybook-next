import Head from 'next/head';
import Button from '../src/stories/components/Button';
import Card from '../src/stories/components/Card';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl py-6">Component Playground</h1>
      <Card title="Card">
        <div className="flex gap-2">
          <Button type="primary">Primary</Button>
          <Button type="danger">Danger</Button>
          <Button type="dashed">Dashed</Button>
        </div>
      </Card>
    </div>
  )
};

export default Home;
