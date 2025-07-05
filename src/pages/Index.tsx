import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Languages, BookOpen, Book } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const languages = [
    { name: "Tiếng Anh", level: "C2 - Proficiency", color: "bg-blue-500" },
    { name: "Tiếng Trung", level: "B2 - Upper Intermediate", color: "bg-red-500" },
    { name: "Tiếng Nhật", level: "B1 - Intermediate", color: "bg-pink-500" },
    { name: "Tiếng Hàn", level: "A2 - Elementary", color: "bg-purple-500" },
  ];

  const experiences = [
    {
      title: "Giáo viên Tiếng Anh",
      company: "Trung tâm Ngoại ngữ ABC",
      period: "2022 - Hiện tại",
      description: "Giảng dạy tiếng Anh giao tiếp và luyện thi IELTS cho học viên từ 16-30 tuổi."
    },
    {
      title: "Phiên dịch viên Freelance",
      company: "Tự do",
      period: "2021 - Hiện tại",
      description: "Phiên dịch tài liệu và hỗ trợ dịch thuật cho các doanh nghiệp quốc tế."
    },
    {
      title: "Gia sư Online",
      company: "Các nền tảng giáo dục",
      period: "2020 - 2022",
      description: "Dạy kèm tiếng Anh và tiếng Trung cho học sinh cấp 2, cấp 3."
    }
  ];

  const certificates = [
    "IELTS 8.5 (2023)",
    "TOEIC 950 (2022)",
    "HSK Level 5 (2023)",
    "JLPT N3 (2022)",
    "TOPIK Level 2 (2021)"
  ];

  const projects = [
    {
      title: "Dự án Dịch thuật Website",
      description: "Dịch và bản địa hóa website thương mại điện tử từ tiếng Anh sang tiếng Việt",
      languages: ["Tiếng Anh", "Tiếng Việt"]
    },
    {
      title: "Khóa học Online",
      description: "Thiết kế và giảng dạy khóa học 'English for Business' với 200+ học viên",
      languages: ["Tiếng Anh"]
    },
    {
      title: "Phiên dịch Hội thảo",
      description: "Phiên dịch đồng thời cho hội thảo quốc tế về công nghệ và giáo dục",
      languages: ["Tiếng Anh", "Tiếng Trung", "Tiếng Việt"]
    }
  ];

  // Thêm các ref cho section
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Hàm scroll tới section
  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Languages className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Nguyễn Thị <span className="text-blue-600">Lan Anh</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Chuyên gia Ngoại ngữ | Giáo viên | Phiên dịch viên
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            Với hơn 5 năm kinh nghiệm trong lĩnh vực giảng dạy và phiên dịch, tôi cam kết mang đến 
            những dịch vụ chất lượng cao và giúp bạn chinh phục mọi rào cản ngôn ngữ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleScrollToProjects}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Xem Thêm
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToContact}
            >
              <Globe className="w-5 h-5 mr-2" />
              Liên hệ ngay
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Languages Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ngôn ngữ thành thạo</h2>
          <p className="text-gray-600">Các ngôn ngữ tôi có thể giảng dạy và phiên dịch</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-full ${lang.color} mx-auto mb-3 flex items-center justify-center`}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{lang.name}</CardTitle>
                  <CardDescription>{lang.level}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kinh nghiệm làm việc</h2>
            <p className="text-gray-600">Hành trình phát triển trong lĩnh vực ngoại ngữ</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-blue-600">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-500 font-medium">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="container mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Dự án nổi bật</h2>
          <p className="text-gray-600">Một số dự án tiêu biểu tôi đã thực hiện</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((lang) => (
                      <Badge key={lang} variant="secondary" className="bg-blue-100 text-blue-700">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Chứng chỉ & Bằng cấp</h2>
            <p className="text-blue-100">Các chứng chỉ quốc tế đã đạt được</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-colors duration-300"
              >
                <Book className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="container mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Liên hệ với tôi</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bạn cần hỗ trợ về ngoại ngữ? Đừng ngần ngại liên hệ với tôi để được tư vấn và báo giá chi tiết.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Email: lananh@example.com
            </Button>
            <Button size="lg" variant="outline">
              Phone: +84 123 456 789
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
