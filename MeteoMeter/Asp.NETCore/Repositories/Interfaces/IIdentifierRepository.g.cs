
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IIdentifierRepository : IRepository<Identifier>
    { 
		IQueryable<Identifier> GetAllWithReferences();
		Task<Identifier> GetByIdWithReferences(int id);
    } 
}