
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IAnswerRepository : IRepository<Answer>
    { 
		IQueryable<Answer> GetAllWithReferences();
		Task<Answer> GetByIdWithReferences(int id);
    } 
}