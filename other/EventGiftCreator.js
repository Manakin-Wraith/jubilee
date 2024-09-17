import React, { useState } from 'react';
import { Calendar, Gift, Send } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const EventGiftCreator = () => {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });
  const [gifts, setGifts] = useState([]);
  const [newGift, setNewGift] = useState('');

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleAddGift = () => {
    if (newGift.trim() !== '') {
      setGifts(prev => [...prev, { name: newGift.trim(), reserved: false }]);
      setNewGift('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Details:', eventDetails);
    console.log('Gift List:', gifts);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Create Event & Gift List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                placeholder="Event Title"
                name="title"
                value={eventDetails.title}
                onChange={handleEventChange}
                required
              />
              <div className="flex gap-2">
                <Input
                  type="date"
                  name="date"
                  value={eventDetails.date}
                  onChange={handleEventChange}
                  required
                />
                <Input
                  type="time"
                  name="time"
                  value={eventDetails.time}
                  onChange={handleEventChange}
                  required
                />
              </div>
              <Input
                placeholder="Location"
                name="location"
                value={eventDetails.location}
                onChange={handleEventChange}
                required
              />
              <Textarea
                placeholder="Event Description"
                name="description"
                value={eventDetails.description}
                onChange={handleEventChange}
                rows={3}
              />
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add gift to wishlist"
                  value={newGift}
                  onChange={(e) => setNewGift(e.target.value)}
                />
                <Button type="button" onClick={handleAddGift} size="icon">
                  <Gift className="w-4 h-4" />
                </Button>
              </div>
              {gifts.length > 0 && (
                <ul className="list-disc list-inside">
                  {gifts.map((gift, index) => (
                    <li key={index} className="text-sm">{gift.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            <Send className="w-4 h-4 mr-2" />
            Create Event & Gift List
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventGiftCreator;