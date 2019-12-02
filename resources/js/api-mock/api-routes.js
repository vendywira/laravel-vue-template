let routes = [{
    method: 'GET',
    url: '/api/v1/home/announcementBanners',
    response: {
      code: 200,
      status: 'OK',
      contents: [{
          url: 'http://www.blibli.com',
          src: 'img/banner-main-1.png',
          alt: 'image 1',
          targetWindow: '_blank'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-2.png',
          alt: 'image 2',
          targetWindow: 'a'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-3.png',
          alt: 'image 3',
          targetWindow: 'a'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-4.png',
          alt: 'image 4'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-5.png',
          alt: 'image 5'
        },
        {
          url: 'http://www.blibli.com',
          src: 'img/banner-main-6.png',
          alt: 'image 6'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/v1/home/articles',
    response: {
      code: 200,
      status: 'OK',
      contents: [{
          title: "image 1",
          src: 'img/banner-main-1.png',
          alt: 'image 1',
          sequence: 0
        },
        {
          title: "image 2",
          src: 'img/banner-main-2.png',
          alt: 'image 2',
          sequence: 1
        },
        {
          title: "image 3",
          src: 'img/banner-main-3.png',
          alt: 'image 3',
          sequence: 2
        },
        {
          title: "image 4",
          src: 'img/banner-main-4.png',
          alt: 'image 4',
          sequence: 3
        },
        {
          title: "image 5",
          src: 'img/banner-main-5.png',
          alt: 'image 5',
          sequence: 4
        },
        {
          title: "image 6",
          src: 'img/banner-main-6.png',
          alt: 'image 6',
          sequence: 5
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/v1/home/videos',
    response: {
      code: 200,
      status: 'OK',
      contents: [{
          title: "Android tutorial (2018) - 01 - Introduction to Android",
          url: 'https://www.youtube.com/watch?v=XgCF58tuo2k&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v',
          sequence: 0
        },
        {
          title: "Android tutorial (2018) - 02 - Prepare development environment",
          url: 'https://www.youtube.com/watch?v=pdAN4wtF-Oo&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=2',
          sequence: 1
        },
        {
          title: "Android tutorial (2018) - 03 - Create Hello World Android application",
          url: 'https://www.youtube.com/watch?v=mypwhMbCw8o&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=3',
          sequence: 2
        },
        {
          title: "Android tutorial (2018) - 04 - Test Android app in Virtual Device (AVD)",
          url: 'https://www.youtube.com/watch?v=UhIrp7JFyI0&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=4',
          sequence: 3
        },
        {
          title: "Android tutorial (2018) - 05 - Create a Simple User Interface",
          url: 'https://www.youtube.com/watch?v=8e5h5jaSHjg&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=5',
          sequence: 4
        },
        {
          title: "Android tutorial (2018) - 06 - Create and Start an Activity",
          url: 'https://www.youtube.com/watch?v=UmQ2luqzh7E&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=6',
          sequence: 5
        },
        {
          title: "Android tutorial (2018) - 07 - Send String to Another activity through Intent",
          url: 'https://www.youtube.com/watch?v=4nklUk-CQQQ&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=7',
          sequence: 6
        },
        {
          title: "Android tutorial (2018) - 08 - Enable Up Navigation for your Android application",
          url: 'https://www.youtube.com/watch?v=QeI4tNnniVc&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=8',
          sequence: 7
        },
        {
          title: "Android tutorial (2018) - 09 - Introduction to Fragments",
          url: 'https://www.youtube.com/watch?v=WgXA697mAPA&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=9',
          sequence: 8
        },
        {
          title: "Android tutorial (2018) - 10 - Add a Fragment to an Activity using XML",
          url: 'https://www.youtube.com/watch?v=gZnvBwXzN8A&list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v&index=10',
          sequence: 9
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/v1/home/events',
    response: {
      code: 200,
      status: 'OK',
      contents: [{
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 0
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 1
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 2
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 3
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 4
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 5
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 6
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 7
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 8
        },
        {
          title: "Dependency Injection",
          level: "Medium",
          prerequisite: "understand basic kotlin and design pattern",
          location: 'Moz Space',
          date: '2019/05/25',
          startTime: '14:00',
          endTime: '17:00',
          quota: '25',
          sequence: 9
        }
      ]
    }
  }
]

export default routes