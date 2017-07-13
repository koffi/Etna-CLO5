stage { [pre, post]: }

Stage[pre] -> Stage[main] -> Stage[post]

class { 'baseconf': stage => 'pre' }
class { 'mainconf': stage => 'main' }
class { 'lastconf': stage => 'post' }

class baseconf {}

class lastconf {}

class mainconf {}