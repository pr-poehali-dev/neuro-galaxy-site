import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = {
    outsourcing: [
      "IT-аутсорсинг",
      "Бухгалтерский аутсорсинг",
      "HR-аутсорсинг",
      "Маркетинговый аутсорсинг",
      "Логистический аутсорсинг",
      "Юридический аутсорсинг"
    ],
    outstaffing: [
      "IT-аутстаффинг",
      "Разработка ПО",
      "Техническая поддержка",
      "Аналитика данных",
      "Дизайн и UX/UI",
      "Контент-менеджмент"
    ],
    merchandising: [
      "Планирование продаж",
      "Анализ рынка",
      "Оптимизация ассортимента",
      "Управление запасами",
      "Визуальный мерчандайзинг",
      "Продвижение товаров"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">НейроСпейс</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Профессиональные<br />
              <span className="text-primary">маркетинговые решения</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Аутсорсинг, аутстаффинг и мерчандайзинг для вашего бизнеса. 
              Увеличиваем эффективность и снижаем затраты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши направления</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные маркетинговые решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Аутсорсинг */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/img/9cd066ab-74c5-47e3-b22d-ad51a318824b.jpg" 
                    alt="Аутсорсинг" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Icon name="Building2" className="text-primary" size={24} />
                  Аутсорсинг
                </CardTitle>
                <CardDescription>
                  Передача бизнес-процессов внешним исполнителям для оптимизации ресурсов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {services.outsourcing.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Аутстаффинг */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/img/6d3f22d4-7a94-4724-90ef-21277a38cb3f.jpg" 
                    alt="Аутстаффинг" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  Аутстаффинг
                </CardTitle>
                <CardDescription>
                  Предоставление квалифицированных специалистов для работы в вашей команде
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {services.outstaffing.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Мерчандайзинг */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/img/338a8492-9ef6-48ea-b0a4-d1ce67cc17d0.jpg" 
                    alt="Мерчандайзинг" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Icon name="ShoppingBag" className="text-primary" size={24} />
                  Мерчандайзинг
                </CardTitle>
                <CardDescription>
                  Комплекс мероприятий по продвижению товаров и увеличению продаж
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {services.merchandising.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О НейроСпейс</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда профессионалов с многолетним опытом в области маркетинга и бизнес-консалтинга. 
                Наша цель — помочь компаниям достичь максимальной эффективности через оптимизацию процессов и привлечение лучших специалистов.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Экспертов в команде</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Target" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                    <p className="text-sm text-muted-foreground">
                      Разрабатываем решения под специфику вашего бизнеса
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Быстрые результаты</h3>
                    <p className="text-sm text-muted-foreground">
                      Первые улучшения видны уже через месяц работы
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Shield" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Гарантия качества</h3>
                    <p className="text-sm text-muted-foreground">
                      Несем полную ответственность за результат
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку, и мы перезвоним в течение часа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Телефон</h3>
                    <p className="text-muted-foreground">+7 (916) 621-76-93</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@neuro-galaxy.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для обсуждения деталей
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о вашем проекте"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-primary" size={32} />
                <span className="text-2xl font-bold">НейроСпейс</span>
              </div>
              <p className="text-muted mb-4">
                Профессиональные маркетинговые решения для развития вашего бизнеса. 
                Аутсорсинг, аутстаффинг и мерчандайзинг.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>Аутсорсинг</li>
                <li>Аутстаффинг</li>
                <li>Мерчандайзинг</li>
                <li>Консалтинг</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>+7 (916) 621-76-93</li>
                <li>info@neuro-galaxy.ru</li>
                <li>neuro-galaxy.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 НейроСпейс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;